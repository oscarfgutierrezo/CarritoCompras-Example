// NAVBAR COLLAPSIBLE
const body = document.querySelector("body")
const menuBtnOpen = document.querySelector("#menuBtn-open");
const menuBtnClose = document.querySelector("#menuBtn-close");
const collapsibleMenu = document.querySelector("#collapsibleMenu");
const pagesBtn = document.querySelector("#pagesBtn");
const pagesMenu = document.querySelector("#pagesMenu");
const overlay = document.querySelector("#overlay")

console.log(overlay.style)

menuBtnOpen.addEventListener("click", () => {
    collapsibleMenu.classList.add("visible");
    overlay.style.visibility = "visible";
    overlay.style.opacity = "0.5";
})
menuBtnClose.addEventListener("click", () => {
    collapsibleMenu.classList.add("hidden");
    collapsibleMenu.classList.remove("visible");
    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0"
})


// MENU COLLAPSIBLE - PAGES

pagesBtn.addEventListener("click", () => {
    if (pagesMenu.style.maxHeight) {
        pagesMenu.style.maxHeight = null
    } else {
        pagesMenu.style.maxHeight = pagesMenu.scrollHeight + "px";
    }
});