"use strict";

function cartTotal(price, amount, tax=0.07, bonus=0.0) {
    let subTotal = 0;
    subTotal += parseFloat(+price * +amount).toFixed(2);
    let cartTax = (subTotal * +tax).toFixed(2);
    let res = (+subTotal + +cartTax - bonus).toFixed(2);
    return res;
}

// const hamburger = document.getElementById('hamburger')
const hamburger = document.querySelector('#hamburger')
// console.dir(hamburger)

// app-nav--hide
const appNavHide = document.querySelector('.app-nav--hide')
// app-nav
const appNav = document.querySelector('.app-nav')

// app-nav-show
const appNavShow = document.querySelector('.app-nav-show')

const hideNav = (event) => {
    event.preventDefault()
    appNav.classList.add('app-nav__hide')
    appNav.classList.remove('app-nav__show')
    appNavShow.classList.toggle('hamburger')

}

const showNav = (event) => {
    event.preventDefault()
    // console.dir(event)
    console.dir(event.target)
    appNav.classList.toggle('app-nav__hide')
    appNav.classList.toggle('app-nav__show')
    appNavShow.classList.toggle('hamburger')

}

function initNav() {
    appNavHide.addEventListener('click', hideNav);
    appNavHide.addEventListener('touchend', hideNav);

    hamburger.addEventListener('click', showNav);
    hamburger.addEventListener('touchend', showNav);
}

function main() {
    // console.dir(window.document)
    // console.dir(document.head)
    // console.dir(document.body)
    // console.dir(window.login)
    
    // add-to-cart
    const addToCart = document.querySelector('.card-body .add-to-cart')
    // addToCart.style.color = "red"
    // console.dir(addToCart.style)
    initNav() 

}
// 

(() => {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", main)
    }else {
        main()
    }
})();

