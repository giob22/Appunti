import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    console.log('Markdown Code Embedder is now active!');

    // Command to manually update
    let disposable = vscode.commands.registerCommand('markdown-embed.update', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found.');
            return;
        }

        const document = editor.document;
        // Show progress indicator since it's now async
        await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: "Updating Code Embeds...",
            cancellable: false
        }, async () => {
            const edits = await generateEdits(document);
            if (edits.length > 0) {
                await editor.edit(editBuilder => {
                    for (const edit of edits) {
                        editBuilder.replace(edit.range, edit.newText);
                    }
                });
                vscode.window.showInformationMessage(`Updated ${edits.length} embeds.`);
            } else {
                vscode.window.showInformationMessage('No embeds found to update.');
            }
        });
    });

    // Auto-update on save
    const onWillSave = vscode.workspace.onWillSaveTextDocument(event => {
        if (event.document.languageId === 'markdown') {
            // waitUntil takes a Promise<TextEdit[]>
            event.waitUntil(generateEdits(event.document));
        }
    });

    // Autocomplete for {line="..." ...}
    const snippetProvider = vscode.languages.registerCompletionItemProvider('markdown', {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substring(0, position.character);

            // Trigger snippet only if we are starting a tag
            if (!/\{\s*[a-zA-Z0-9-]*$/.test(linePrefix)) {
                return undefined;
            }

            const item = new vscode.CompletionItem('embed-code', vscode.CompletionItemKind.Snippet);
            item.detail = 'Markdown Code Embedder';
            item.documentation = new vscode.MarkdownString('Insert a code embed marker: `{line="..." file="..."}`');
            item.insertText = new vscode.SnippetString('line="${1:1-10}" file="${2:./file.ext}"}');

            return [item];
        }
    }, '{');

    // Autocomplete for file paths inside file="..."
    const pathProvider = vscode.languages.registerCompletionItemProvider('markdown', {
        async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substring(0, position.character);

            // Check if we are inside file="..."
            // Matches: file=" or file=' followed by any characters that are NOT quotes
            const match = linePrefix.match(/file=["']([^"']*)$/);
            if (!match) {
                return undefined;
            }

            // User is typing a path. 
            // We want to suggest files relative to the current document.
            const currentDir = path.dirname(document.uri.fsPath);

            // Calculate replacement range
            // We want to replace whatever the user typed inside the quotes
            const userTypedPath = match[1];
            const rangeStart = position.translate(0, -userTypedPath.length);
            const range = new vscode.Range(rangeStart, position);

            // Find all files in workspace
            // pattern: **/*, exclude: node_modules, .git, out, etc.
            const files = await vscode.workspace.findFiles('**/*', '{**/node_modules/**,**/.git/**,**/out/**,**/.vscode/**}');

            const completionItems: vscode.CompletionItem[] = [];

            for (const file of files) {
                // Calculate relative path
                let relPath = path.relative(currentDir, file.fsPath);

                // Normalize path separators to forward slashes for cross-platform compatibility in markdown
                relPath = relPath.split(path.sep).join('/');

                // Ensure it starts with ./ if it's in the same or sub directory for clarity (optional, but standard for relative)
                if (!relPath.startsWith('.') && !relPath.startsWith('/')) {
                    relPath = './' + relPath;
                }

                const item = new vscode.CompletionItem(relPath, vscode.CompletionItemKind.File);
                item.detail = 'Relative Path';

                // Set the range to replace the user's typed prefix with the full path
                item.range = range;

                completionItems.push(item);
            }

            return completionItems;
        }
    }, '"', '\'', '/'); // Trigger on quotes and slash

    context.subscriptions.push(disposable);
    context.subscriptions.push(onWillSave);
    context.subscriptions.push(snippetProvider);
    context.subscriptions.push(pathProvider);
}

async function generateEdits(document: vscode.TextDocument): Promise<vscode.TextEdit[]> {
    const text = document.getText();
    const markerRegex = /\{line=["']([0-9]+)-([0-9]+)["']\s+file=["']([^"']+)["']\}/g;

    const edits: vscode.TextEdit[] = [];
    const promises: Promise<void>[] = [];

    let match;
    while ((match = markerRegex.exec(text)) !== null) {
        // Capture specific match data for the closure
        const currentMatch = match;
        const matchStart = currentMatch.index;
        const matchEnd = currentMatch.index + currentMatch[0].length;
        const startLine = parseInt(currentMatch[1]);
        const endLine = parseInt(currentMatch[2]);
        const filePath = currentMatch[3];

        const remainingText = text.substring(matchEnd);
        const closeMarkerRegex = /<!--\s*embed:end\s*-->/;
        const closeMatch = closeMarkerRegex.exec(remainingText);

        let replaceRange: vscode.Range;
        let insertOnly = false;

        if (closeMatch && text.indexOf(closeMatch[0], matchEnd) !== -1) {
            const closeIndex = matchEnd + closeMatch.index;
            const closeEndIndex = closeIndex + closeMatch[0].length;
            replaceRange = new vscode.Range(
                document.positionAt(matchEnd),
                document.positionAt(closeEndIndex)
            );
        } else {
            replaceRange = new vscode.Range(
                document.positionAt(matchEnd),
                document.positionAt(matchEnd)
            );
            insertOnly = true;
        }

        // Push a promise that resolves the content
        promises.push((async () => {
            try {
                const embeddedCode = await resolveAndReadCode(document, filePath, startLine, endLine);
                const lang = getLanguageId(filePath);

                // Ensure newline separation
                let newContent = '\n```' + lang + '\n' + embeddedCode + '\n```\n<!-- embed:end -->';

                edits.push(vscode.TextEdit.replace(replaceRange, newContent));
            } catch (err: any) {
                console.error(`Error embedding ${filePath}: ${err.message}`);
                // Optionally add a comment in the markdown about the error?
                // For now, silent failure in UI to avoid popup spam on save
            }
        })());
    }

    await Promise.all(promises);

    // Sort edits by start position descending
    return edits.sort((a, b) => b.range.start.compareTo(a.range.start));
}

async function resolveAndReadCode(document: vscode.TextDocument, relPath: string, startLine: number, endLine: number): Promise<string> {
    // 1. Try relative to the markdown file
    let targetPath = path.resolve(path.dirname(document.uri.fsPath), relPath);

    // Check if file exists (async)
    try {
        await fs.promises.access(targetPath);
    } catch {
        // 2. Try relative to workspace root if available
        const workspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);
        if (workspaceFolder) {
            targetPath = path.resolve(workspaceFolder.uri.fsPath, relPath);
            try {
                await fs.promises.access(targetPath);
            } catch {
                throw new Error(`File not found: ${relPath}`);
            }
        } else {
            throw new Error(`File not found: ${relPath}`);
        }
    }

    const content = await fs.promises.readFile(targetPath, 'utf-8');
    const lines = content.split(/\r?\n/);

    if (startLine < 1 || endLine > lines.length || startLine > endLine) {
        throw new Error(`Invalid line range: ${startLine}-${endLine} (File has ${lines.length} lines)`);
    }

    return lines.slice(startLine - 1, endLine).join('\n');
}

function getLanguageId(filePath: string): string {
    const ext = path.extname(filePath).toLowerCase();
    const map: { [key: string]: string } = {
        '.js': 'javascript',
        '.ts': 'typescript',
        '.py': 'python',
        '.java': 'java',
        '.c': 'c',
        '.cpp': 'cpp',
        '.h': 'c',
        '.css': 'css',
        '.html': 'html',
        '.json': 'json',
        '.md': 'markdown',
        '.sh': 'bash',
        '.yaml': 'yaml',
        '.yml': 'yaml',
        '.xml': 'xml'
    };
    return map[ext] || '';
}

export function deactivate() { }
