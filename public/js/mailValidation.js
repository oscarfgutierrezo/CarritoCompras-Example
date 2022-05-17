const subscribeContainer = document.querySelector("#subscribeContainer")
const subscribeInput =document.querySelector("#subscribeInput")
const subscribeBtn = document.querySelector("#subscribeBtn");
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.addEventListener("DOMContentLoaded", disableBtn);

subscribeInput.addEventListener("blur", validateEmail)

function disableBtn() {
    subscribeBtn.disabled = true;
    subscribeBtn.classList.add("disableBtn");
}

function validateEmail(evt) {
    cleanErrors();
    if(evt.target.value.length === 0) {
        showErrorMessage("Enter your email if want to subscribe");
    } else {
        if(er.test(evt.target.value)) {
            subscribeBtn.disabled = false;
            subscribeBtn.classList.remove("disableBtn");
        } else {
            showErrorMessage("Enter a valid email if you want to subscribe");
        }
    }
} 

function showErrorMessage(mensaje) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("errorMessage");
    errorMessage.textContent = mensaje;
    subscribeContainer.insertBefore(errorMessage, subscribeContainer.children[3]);
}

function cleanErrors() {
    const error = document.querySelector(".errorMessage")
    if (error) {
        error.remove()
    }
}