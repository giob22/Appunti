


document.addEventListener("scroll", (event) => {
    let SaveNewPosyCoords = window.scrollY;
    localStorage.setItem(`SavedPosition${document.getRootNode()}`, SaveNewPosyCoords);
});