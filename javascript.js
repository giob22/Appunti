const firstP = document.querySelector(".active");
const key = `SavedPosition${firstP.textContent}`;

window.addEventListener("load", () => {
    const y = Number(localStorage.getItem(key));

    if (!isNaN(y)) {
        setTimeout(() => {
            window.scrollTo(
                {
                top: y,
                behavior: "smooth"
                }
            );
            
        }, 100);
    }
    setTimeout(() => {
        createBackButton();
    }, 500);
});

document.addEventListener("scroll", () => {
    localStorage.setItem(key, window.scrollY);
});


document.addEventListener('click', function(e) {
    // 1. Controlla se l'elemento cliccato è un link interno (inizia con #)
    // Nota: e.target.closest('a') serve nel caso clicchi su un'icona dentro un link
    const link = e.target.closest('a');
    
    if (link && link.getAttribute('href').startsWith('#')) {
        const id = link.getAttribute('href').substring(1); // Rimuove il '#'
        const targetElement = document.getElementById(id);

        if (targetElement) {
            // 2. Rimuove la classe se c'era già (reset)
            targetElement.classList.remove('flash-attivo');
            
            // 3. Trucco magico: forza il browser a ricalcolare lo stile (Reflow)
            // Senza di questo, togliere e rimettere la classe subito non riavvia l'animazione
            void targetElement.offsetWidth; 
            
            // 4. Aggiunge la classe che fa partire l'animazione
            targetElement.classList.add('flash-attivo');
            
            // Opzionale: Rimuove la classe alla fine dell'animazione (pulizia)
            setTimeout(() => {
                targetElement.classList.remove('flash-attivo');
            }, 1500); // 1500ms corrisponde alla durata nel CSS
        }
    }
});

// aggiungo pulsante "back"
function createBackButton(){
    console.log("test");

    let css = `
    /* CSS */
    .button-89 {
    --b: 3px;   /* border thickness */
    --s: .45em; /* size of the corner */
    --color: var(--sidebar-active);
    
    padding: calc(.5em + var(--s)) calc(.9em + var(--s));
    color: var(--color);
    --_p: var(--s);
    background:
        conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
        var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
    transition: .3s linear, color 0s, background-color 0s;
    outline: var(--b) solid #0000;
    outline-offset: .6em;
    font-size: 16px;

    border: 0;

    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    }

    .button-89:hover,
    .button-89:focus-visible{
    --_p: 0px;
    outline-color: var(--color);
    outline-offset: .05em;
    }

    .button-89:active {
    background: var(--color);
    color: #fff;
    }
    img {
        padding: 8px;
    }

    /* Definiamo l'animazione */
    @keyframes flash-pulse {
        0% {
            background-color: var(--sidebar-active);
        }
        100% {
            background-color: trasparent;
        }
    }

    /* Questa classe verrà aggiunta da JS quando clicchi */
    .flash-attivo {
        animation: flash-pulse 1.5s linear;
    }

    `
    let style = document.createElement("style");
    style.innerHTML = css;

    let Menu = document.querySelector(".sidebar-scrollbox");
    let DivBackButton = document.createElement("div");


    let FontAwasomeLink = document.createElement("link");
    FontAwasomeLink.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");
    FontAwasomeLink.setAttribute("rel", "stylesheet");


    let BackA = document.createElement("button");
    BackA.setAttribute("href", "../index.html");
    BackA.setAttribute("class", "button-89");
    BackA.setAttribute("role", "button");
    BackA.setAttribute("onclick", "window.location.href='../index.html'");
    BackA.innerHTML = `<i class="fa-solid fa-angles-left"></i> APPUNTI`; //* <-- TESTO BOTTONE

    DivBackButton.appendChild(BackA);


    Menu.prepend(DivBackButton);
    Menu.prepend(FontAwasomeLink);
    Menu.prepend(style);
}