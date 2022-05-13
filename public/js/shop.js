// NAVBAR COLLAPSIBLE
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



// CARRITO DE FAVORITOS Y COMPRAS

    // Collapse Container Favoritos

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

    // Collapse Container Cart

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

    // Detectar el click en el botón de agregar a Favoritos o agregar a Carrito

const products = document.querySelector("#products")

products.addEventListener("click", addFavorite)
function addFavorite (evt) {
    evt.preventDefault();
    if (evt.target.classList.contains("fa-heart")) {
        const selectProduct = evt.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        readLikeProductInfo (selectProduct);
    }
    if (evt.target.classList.contains("fa-bag-shopping")) {
        const selectProduct = evt.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        readCartProductInfo (selectProduct);
    }
}

    // Crear objeto con info del producto y verificar si el producto ya existe en el arreglo likeProducts

let likeProducts = [];

function readLikeProductInfo (product) {
    const infoLikeProduct = {
        image: product.querySelector("img").src,
        name: product.querySelector("h3").textContent,
        price: product.querySelector("span").textContent,
        id: product.querySelector("i").getAttribute("data-id"),
        number: 1,
    };
    const exist = likeProducts.some ( product => product.id === infoLikeProduct.id);
    if  (exist) {
        likeProducts = [...likeProducts];
    } else {
        likeProducts = [...likeProducts, infoLikeProduct];
    }
    likesHTML();
}

    // Crear objeto con info del producto y verificar si el producto ya existe en el arreglo CartProducts

let cartProducts = [];

function readCartProductInfo (product) {
    const infoCartProduct = {
        image: product.querySelector("img").src,
        name: product.querySelector("h3").textContent,
        price: parseFloat(product.querySelector("span").textContent),
        id: product.querySelector("i").getAttribute("data-id"),
        number: 1,
    };
    const exist = cartProducts.some ( product => product.id === infoCartProduct.id);
    if  (exist) {
        const products = cartProducts.map ( product => {
            if (product.id === infoCartProduct.id) {
                product.number++;
                return product;
            } else {
                return product;
            }
        })
        cartProducts = [...products];
    } else {
        cartProducts = [...cartProducts, infoCartProduct];
    }

    calculateTotalPrice();
    cartHTML();
}

    // Crear HTML con la información del arreglo e imprimirla en el Contenedor de Likes

const likesTable = document.querySelector("#likesTable tbody");

function likesHTML () {
    cleanLikesHTML();

    likeProducts.forEach( product => {
        const {image, name, price, id} = product;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${image}" width=100>
            </td>
            <td>${name}</td>
            <td>${price}</td>
            <td>
                <a href="#" class="deleteProduct" data-id="${id}"> X </a>
            </td>
        `;

        likesTable.appendChild(row)
        updateLikesNumber ()
    })
};

function cleanLikesHTML () {
    while (likesTable.firstChild) {
        likesTable.removeChild(likesTable.firstChild)
    }
};

    // Crear HTML con la información del arreglo e imprimirla en el Contenedor de Cart

const cartTable = document.querySelector("#cartTable tbody");

function cartHTML () {
    cleanCartHTML();

    cartProducts.forEach( product => {
        const {image, name, price, id, number} = product;
        const accumulatedPrice = (price * number).toFixed(2)
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>
            <img src="${image}" width=100>
        </td>
        <td>${name}<br><span>X ${number} Units</span></td>
        <td>${accumulatedPrice} USD</td>
        <td>
            <a href="#" class="deleteProduct" data-id="${id}"> X </a>
        </td>
    `;

    cartTable.appendChild(row)
    updateCartNumber ()
    })
    
}

function cleanCartHTML () {
    while (cartTable.firstChild) {
        cartTable.removeChild(cartTable.firstChild)
    }
    
};


    // Eliminar productos de Favoritos

likesContainer.addEventListener("click", eliminarLike);

function eliminarLike (evt) {
    if (evt.target.classList.contains("deleteProduct")) {
        const productId = evt.target.getAttribute("data-id");
        likeProducts = likeProducts.filter(product => product.id !== productId);
    }
    likesHTML();
    updateLikesNumber ()
};

    // Eliminar productos del carrito

cartContainer.addEventListener("click", eliminarCart);

function eliminarCart (evt) {
    if (evt.target.classList.contains("deleteProduct")) {
        const productId = evt.target.getAttribute("data-id");
        cartProducts = cartProducts.filter(product => product.id !== productId);
    }
    cartHTML();
    calculateTotalPrice();
    updateCartNumber ()
};

    // Vaciar productos de favoritos

const emptyLikes = document.querySelector("#emptyLikesBtn");

emptyLikes.addEventListener ("click", () => {
    likeProducts = [];
    cleanLikesHTML ();
    updateLikesNumber ()
})

    // Vaciar productos del carrito

const emptyCart = document.querySelector("#emptyCartBtn");

emptyCart.addEventListener ("click", () => {
    cartProducts = [];
    cleanLikesHTML ();
    updateCartNumber ()
})

    // Indicar la cantidad de favoritos
function updateLikesNumber () {
    const likesIndicator = document.querySelector("#likesIndicator")
    const likesIndicator02 = document.querySelector("#likesIndicator02");
    likesIndicator.textContent = likeProducts.length;
    likesIndicator02.textContent = likeProducts.length;
}

    // Indicar la cantidad de productos en el carrito
function updateCartNumber () {
    const cartIndicator = document.querySelector("#cartIndicator")
    const cartIndicator02 = document.querySelector("#cartIndicator02");
    cartIndicator.textContent = cartProducts.length;
    cartIndicator02.textContent = cartProducts.length;
}

    // Calcular y mostrar el precio total

function calculateTotalPrice () {
    let totalPrice;
    const totalPrice01HTML = document.querySelector("#totalPrice01");
    const totalPrice02HTML = document.querySelector("#totalPrice02");

    totalPrice = cartProducts.map(product => product.price * product.number).reduce((total, productPrice) => total + productPrice, 0);
    
    totalPrice01HTML.textContent = `${(totalPrice).toFixed(2)} USD`;
    totalPrice02HTML.textContent = `${(totalPrice).toFixed(2)} USD`;
};