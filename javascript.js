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