// NAVBAR COLAPSABLE

const menuBtnOpen = document.querySelector("#menuBtn-open");
const menuBtnClose = document.querySelector("#menuBtn-close");
const collapsibleMenu = document.querySelector("#collapsibleMenu");
const overlay01 = document.querySelector("#overlay01");

menuBtnOpen.addEventListener("click", () => {
    collapsibleMenu.classList.add("visible");
    overlay01.style.visibility = "visible";
    overlay01.style.opacity = "0.5";
})
menuBtnClose.addEventListener("click", () => {
    collapsibleMenu.classList.add("hidden");
    collapsibleMenu.classList.remove("visible");
    overlay01.style.visibility = "hidden";
    overlay01.style.opacity = "0"
})



// MENU PAGES COLAPSABLE

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



// MENU DEPARTAMENTS COLAPSABLE

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



// CARRITO DE FAVORITOS

let likeListProducts = [];

    // Mostrar el contenedor 

const showFavoritesBtn = document.querySelector("#showFavoritesBtn");
const likesContainer = document.querySelector(".header__shopContainer--likes");
const overlay02 = document.querySelector("#overlay02")

showFavoritesBtn.addEventListener("click", () => {
    likesContainer.style.maxHeight = "70vh"
    likesContainer.style.padding = "2rem";
    likesContainer.style.opacity = "1";
    overlay02.style.visibility = "visible";
    overlay02.style.opacity = "0.5";
});

overlay02.addEventListener("click", () => {
    likesContainer.style.maxHeight = null;
    likesContainer.style.padding = null;
    likesContainer.style.opacity = "0"
    overlay02.style.visibility = "hidden";
    overlay02.style.opacity = "0";
})

    // Detectar click en botón de agregar a favoritos

productsContainerDOM.addEventListener ("click", (evt) => {
    if (evt.target.classList.contains("fa-heart")) {
        const likeBtnId = evt.target.getAttribute("data-id")
        addLikeProduct (likeBtnId);
        showLikeSnackbar (likeBtnId)
    };
})

    //Agregar productos al arreglo

function addLikeProduct (likeBtnId) {
    const likeProduct = products.filter(product => product.id === likeBtnId)
    const existe = likeListProducts.some (product => product.id === likeBtnId)
    if (existe) {
        likeListProducts = [...likeListProducts]
    } else {
        likeListProducts = [...likeListProducts, ...likeProduct];
    }
    likeProductsHTML();
}

    // Crear HTML con la información del arreglo e imprimirla en el contenedor HTML

const likesTable = document.querySelector("#likesTable tbody");

function likeProductsHTML () {
    cleanLikeProductsHTML();
    likeListProducts.forEach( product => {
        const {name, measurementUnit, price, currency, image, id} = product;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${image}" width=100>
            </td>
            <td>${name} / ${measurementUnit}</td>
            <td>${price.toFixed(2)} ${currency}</td>
            <td>
                <a href="#" class="deleteProduct" data-id="${id}"> X </a>
            </td>
        `;

        likesTable.appendChild(row)
        updateLikesNumber()
    })
}

function cleanLikeProductsHTML () {
    while (likesTable.firstChild) {
        likesTable.removeChild(likesTable.firstChild)
    }
};

    // Eliminar productos

likesContainer.addEventListener("click", eliminarLike);

function eliminarLike (evt) {
    if (evt.target.classList.contains("deleteProduct")) {
        const productId = evt.target.getAttribute("data-id");
        likeListProducts = likeListProducts.filter(product => product.id !== productId);
    }
    likeProductsHTML();
    updateLikesNumber();
};

    // Vaciar el carrito

const emptyLikes = document.querySelector("#emptyLikesBtn");

emptyLikes.addEventListener ("click", () => {
    likeListProducts = [];
})

    // Indicar la cantidad de favoritos

function updateLikesNumber() {
    const likesIndicator = document.querySelector("#likesIndicator")
    const likesIndicator02 = document.querySelector("#likesIndicator02");
    likesIndicator.textContent = likeListProducts.length;
    likesIndicator02.textContent = likeListProducts.length;
}

    // Mostrar snackbar del producto agregado

function showLikeSnackbar(id) {
    const snackbar = document.querySelector("#snackbar");
    const selectProduct = products.find ( product => product.id === id);
    snackbar.className = "showSnackbar";
    snackbar.textContent = `You added ${selectProduct.name} to Favorites Cart`;
    setTimeout(() => {snackbar.className = snackbar.className.replace("showSnackbar", "");}, 2000)
}


// CARRITO DE COMPRAS

let shopListProducts = [];

    // Mostrar el contenedor de compras

const showCartBtn = document.querySelector("#showCartBtn");
const cartContainer = document.querySelector(".header__shopContainer--cart");

showCartBtn.addEventListener("click", () => {
    cartContainer.style.maxHeight = "60vh";
    cartContainer.style.padding = "2rem";
    cartContainer.style.opacity = "1";
    overlay02.style.visibility = "visible";
    overlay02.style.opacity = "0.5";
});

overlay02.addEventListener("click", () => {
    cartContainer.style.maxHeight = null;
    cartContainer.style.padding = null;
    cartContainer.style.opacity = "0"
    overlay02.style.visibility = "hidden";
    overlay02.style.opacity = "0";
})

    // Detectar click en botón de agregar a carrito

productsContainerDOM.addEventListener ("click", (evt) => {
    if (evt.target.classList.contains("fa-bag-shopping")) {
        const shopBtnId = evt.target.getAttribute("data-id");
        addShopProduct (shopBtnId);
        showShopSnackbar (shopBtnId)
    };
})

    //Agregar productos al arreglo

function addShopProduct (shopBtnId) {
    const shopProduct = products.filter(product => product.id === shopBtnId);
    const existe = shopListProducts.some (product => product.id === shopBtnId)
    if (existe) {
        const selectProducts = shopListProducts.map( product => {
            if (product.id === shopBtnId) {
                product.number++;
                return product;
            } else {
                return product
            }
        })
        shopListProducts = [...selectProducts];
    } else {
        shopListProducts = [...shopListProducts, ...shopProduct];
    }
    shopProductsHTML();
}

    // Crear HTML con la información del arreglo e imprimirla en el contenedor HTML

const shopTable = document.querySelector("#cartTable tbody");

function shopProductsHTML () {
    cleanShopProductsHTML();
    shopListProducts.forEach( product => {
        const {name, measurementUnit, price, currency, image, number, id} = product;
        const accumulatedPrice = (price * number).toFixed(2)
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${image}" width=100>
            </td>
            <td>${name} / ${measurementUnit}<br><span>X ${number} Units</span></td>
            <td>${accumulatedPrice} ${currency}</td>
            <td>
                <a href="#" class="deleteProduct" data-id="${id}"> X </a>
            </td>
        `;

        shopTable.appendChild(row)
        updateCartNumber ();
        calculateTotalPrice ();
    })
}

function cleanShopProductsHTML () {
    while (shopTable.firstChild) {
        shopTable.removeChild(shopTable.firstChild)
    }
};

    // Eliminar productos

cartContainer.addEventListener("click", eliminarShop);

function eliminarShop (evt) {
    if (evt.target.classList.contains("deleteProduct")) {
        const productId = evt.target.getAttribute("data-id");
        shopListProducts = shopListProducts.filter(product => product.id !== productId);
    }
    shopProductsHTML();
    updateCartNumber ();
    calculateTotalPrice ();
};
    
        // Vaciar el carrito
    
const emptyShop = document.querySelector("#emptyCartBtn");

emptyShop.addEventListener ("click", () => {
    shopListProducts = [];
})

    // Indicar la cantidad de productos en el carrito

function updateCartNumber () {
    const cartIndicator = document.querySelector("#cartIndicator")
    const cartIndicator02 = document.querySelector("#cartIndicator02");
    cartIndicator.textContent = shopListProducts.length;
    cartIndicator02.textContent = shopListProducts.length;
}

    // Calcular y mostrar el precio total

function calculateTotalPrice () {
    let totalPrice;
    const totalPrice01DOM = document.querySelector("#totalPrice01");
    const totalPrice02DOM = document.querySelector("#totalPrice02"); 

    totalPrice = shopListProducts.map( product => product.price * product.number).reduce((total, productPrice) => total + productPrice, 0);

    totalPrice01DOM.textContent = `${(totalPrice).toFixed(2)} USD`;
    totalPrice02DOM.textContent = `${(totalPrice).toFixed(2)} USD`;
}



function showShopSnackbar(id) {
    const snackbar = document.querySelector("#snackbar");
    const selectProduct = products.find ( product => product.id === id);
    snackbar.className = "showSnackbar";
    snackbar.textContent = `You added ${selectProduct.name} to Shopping Cart`;
    setTimeout(() => {snackbar.className = snackbar.className.replace("showSnackbar", "");}, 2000)
}