"use strict";

import Cart from './modules/cart.js';

import {populateProductList} from '/js/modules/catalog.js';

function cartTotal(price, amount, tax=0.07, bonus=0.0) {
    let subTotal = 0;
    subTotal += parseFloat(+price * +amount).toFixed(2);
    let cartTax = (subTotal * +tax).toFixed(2);
    let res = (+subTotal + +cartTax - bonus).toFixed(2);
    return res;
}

// const hamburger = document.getElementById('hamburger')
const hamburger = document.querySelector('#hamburger')
const appNavHide = document.querySelector('.app-nav--hide')
const appNav = document.querySelector('.app-nav')
const appNavShow = document.querySelector('.app-nav-show')

const hideNav = (event) => {
    event.preventDefault()
    appNav.classList.add('app-nav__hide')
    appNav.classList.remove('app-nav__show')
    appNavShow.classList.toggle('hamburger')

}

const showNav = (event) => {
    event.preventDefault()
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
    
    initNav();
    let shoppingCart = new Cart();

    const productContainer = document.querySelector('.product-container');

    if (productContainer) {
        productContainer.innerHTML = populateProductList(products);

        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        shoppingCart.addProductToCartButton(addToCartButtons, '.product');
    }

}

// 

(() => {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", main)
    }else {
        main()
    }
})();

