const allFilter = document.querySelector("#allFilter");
const productCards = document.querySelectorAll(".productCard");

const products = [
    {
        name: "Bananas",
        weightUnit: "1 Kg",
        price: 2,
        currency: "USD",
        categories: ["fruit"]
    },
    {
        name: "Apples",
        weightUnit: "1 Kg",
        price: 3,
        currency: "USD",
        categories: ["fruit"]
    },
    {
        name: "Watermelon",
        weightUnit: "1 Kg",
        price: 4,
        currency: "USD",
        categories: ["fruit"]
    },
]

// allFilter.addEventListener("click", () => {
//     showAllProducts ();
//     console.log("Click en All")
// })

// function showAllProducts () {
//     const fruits = productCards.filter(product => product.dataset.contains())
// }



// productCards.filter( product => product.dataset.id === "fruit")
//     console.log(allProducts);
// console.log (productCards[1].dataset)
// const allProducts = productCards.forEach( producto => console.log(producto.dataset.id));