# Markdown Code Embedder

Embed code snippets from external files into Markdown documents and keep them in sync.

## Features

- **Embed Code**: Use `<!-- embed:start path="..." lines="..." -->` to include code from other files.
- **Update**: Run the "Update Code Embeds" command to refresh all snippets.
- **Auto-Formatting**: Automatically detects the language of the target file and applies the correct markdown code block syntax.

## Usage

1.  Add a marker to your markdown file:
    ```markdown
    {line="10-20" file="./src/app.ts"}
    ```
2.  **Save the file**. The extension will automatically fetch the code and insert it.

    *Alternatively*, you can run the command `Update Code Embeds`.

The markdown file will look like this:

```markdown
{line="10-20" file="./src/app.ts"}
```typescript
// Content of lines 10-20 from app.ts
...
```
<!-- embed:end -->
```

## Features

- **Automatic Updates**: Code embeds are updated automatically when you save the markdown file.
- **Autocomplete**: Type `{` to get a snippet suggestion.
- **File Path Suggestions**: Automatically suggests relative file paths when typing inside `file="..."`.
- **New Syntax**: Use `{line="Start-End" file="File"}`.
- **Auto-Formatting**: Automatically detects the language of the target file.


## Requirements

- VS Code 1.74.0 or higher.

## Extension Settings

None.

## Known Issues

- Nested embeds are not supported.
