// VARIABLES

const productsContainerDOM = document.querySelector("#productsContainer");
const allFilterDOM = document.querySelector("#allFilter");
const fruitFilterDOM = document.querySelector("#fruitFilter");
const vegetableFilterDOM = document.querySelector("#vegetableFilter");
const meatFilterDOM = document.querySelector("#meatFilter");
const dairyFilterDOM = document.querySelector("#dairyFilter");

//EVENTOS

document.addEventListener("DOMContentLoaded", showProducts(products));

allFilterDOM.addEventListener("click", showAll);
fruitFilterDOM.addEventListener("click", showFruits);
vegetableFilterDOM.addEventListener("click", showVegetables);
meatFilterDOM.addEventListener("click", showMeats);
dairyFilterDOM.addEventListener("click", showDairy);

//FUNCIONES

    // Crear HTML con información de productos (data.js) al cargar la página

function showProducts(products) {
    cleanProductsContainer();
    products.forEach ( product => {
        const {name, measurementUnit, price, currency, image, categorie, id} = product;
        const productHTML = document.createElement("div");
        productHTML.classList.add("productCard");
        productHTML.innerHTML = `
        <div class="productCard__image">
            <img src="${image}">
            <ul>
                <li><button><i class="fa-solid fa-heart" data-id="${id}"></i></button></li>
                <li><button><i class="fa-solid fa-bag-shopping" data-id="${id}"></i></button></li>
            </ul>
        </div>
        <div class="productCard__info">
            <h3>${name} ${measurementUnit}</h3>
            <span>${price.toFixed(2)} ${currency}</span>
        </div>
        `;

        productsContainerDOM.appendChild(productHTML);
    })
}

    // Limpia el contenedor de productos antes de aplicar cada filtro

function cleanProductsContainer() {
    while (productsContainerDOM.firstChild) {
        productsContainerDOM.removeChild(productsContainerDOM.firstChild);
    }
}

    // Crea e imprime un arreglo de productos según el filtro seleccionado

function showAll() {
    productsContainerDOM.dataset.categorie = "all";
    filterStyle()
    showProducts(products);
}

function showFruits() {
    const fruits = products.filter(product => product.categorie === "fruit");
    productsContainerDOM.dataset.categorie = "fruit";
    filterStyle()
    showProducts(fruits);
}

function showVegetables() {
    const vegetables = products.filter(product => product.categorie === "vegetable");
    productsContainerDOM.dataset.categorie = "vegetable";
    filterStyle()
    showProducts(vegetables);
}

function showMeats() {
    const meats = products.filter(product => product.categorie === "meat");
    productsContainerDOM.dataset.categorie = "meat";
    filterStyle();
    showProducts(meats);
}

function showDairy() {
    const dairy = products.filter(product => product.categorie === "dairy");
    productsContainerDOM.dataset.categorie = "dairy";
    filterStyle();
    showProducts(dairy);
}

// Agrega estilos al botón del filtro seleccionado

function filterStyle() {
    const filters = document.querySelectorAll(".filter");
    filters.forEach( filter => {
        if (filter.dataset.filter === productsContainerDOM.dataset.categorie) {
            filter.classList.add("categorieSelectorActive")
        } else {
            filter.classList.remove("categorieSelectorActive")
        }
    })
}