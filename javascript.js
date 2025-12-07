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
});

document.addEventListener("scroll", () => {
    localStorage.setItem(key, window.scrollY);
});
