// NAVBAR COLLAPSIBLE
const menuBtnOpen = document.querySelector("#menuBtn-open");
const menuBtnClose = document.querySelector("#menuBtn-close");
const collapsibleMenu = document.querySelector("#collapsibleMenu");
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

const pagesBtn = document.querySelector("#pagesBtn");
const pagesMenu = document.querySelector("#pagesMenu");
const pagesArrow = document.querySelector("#pagesArrow")

pagesBtn.addEventListener("click", () => {
    if (pagesMenu.style.maxHeight) {
        pagesMenu.style.maxHeight = null
        pagesArrow.classList.add("fa-chevron-right");
        pagesArrow.classList.remove("fa-chevron-down");
    } else {
        pagesMenu.style.maxHeight = pagesMenu.scrollHeight + "px";
        pagesArrow.classList.remove("fa-chevron-right");
        pagesArrow.classList.add("fa-chevron-down");
    }
});

// MENU COLLAPSIBLE - DEPARTAMENTS

const departamentsBtn = document.querySelector("#departamentsBtn");
const departamentsMenu = document.querySelector("#departamentsMenu");
const departamentsArrow = document.querySelector("#departamentsArrow")

departamentsBtn.addEventListener("click", () => {
    if (departamentsMenu.style.maxHeight) {
        departamentsMenu.style.maxHeight = null
        departamentsArrow.classList.add("fa-chevron-right");
        departamentsArrow.classList.remove("fa-chevron-down");
    } else {
        departamentsMenu.style.maxHeight = departamentsMenu.scrollHeight + "px";
        departamentsArrow.classList.remove("fa-chevron-right");
        departamentsArrow.classList.add("fa-chevron-down");
    }
});