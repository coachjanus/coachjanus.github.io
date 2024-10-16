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

// console.dir(document.getElementsByTagName('a'))
// console.dir(document.querySelectorAll('.nav a'))
// console.dir(document.getElementsByClassName('add-to-cart'))

// const addToCartButtons = document.getElementsByClassName('add-to-cart');
// const addToCartButtons = document.querySelectorAll('.add-to-cart');
// for (let i=0; i<addToCartButtons.length; i++) {
//     console.dir(addToCartButtons[i])
// }

// addToCartButtons.forEach(element => 
//     console.dir(element)
// );

// addToCartButtons.forEach((element, index) => 
//     console.log(element, '=>', index)
// );


const productItemTemplate = product => `
<div class="card">
    <div class="product" data-id="${product.id}">                 
        <figure class="image badge badge-${product.badge}">
            <img src="${product.image}" alt="${product.name}" srcset="">
        </figure>

        <div class="card-body">
            <h3 class="card-title">${product.name}</h3>
                <div class="product-meta">
                    <div class="price">${product.price}</div>
                    <div class="icon-actions">
                        <a href="#" class="fas fa-shopping-cart add-to-cart icon icon--inline"></a>
                        <a href="#" class="fas fa-heart add-to-wishlist icon icon--inline"></a>
                        <a href="#" class="fas fa-eye icon icon--inline"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

// const populateProductList = () => {
//     let contemt = '';
//     for (let i=0; i<10; i++) {
//         contemt += productItemTemplate()
//     }
//     return contemt;
// }

const populateProductList = (products) => {
    let contemt = '';
    products.forEach(element => 
        contemt += productItemTemplate(element)
    );
    return contemt;
}

const productContainer = document.querySelector('.product-container')

let cart = []

function saveCart() {
    console.dir(cart)
}

function addProductToCart(productId) {
    let item = {
        id: productId,
        amount: 1
    }

    cart.push(item)
    saveCart()

}
   
function addProductToCartButton() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    if(addToCartButtons) {
        addToCartButtons.forEach(element => 
            element.addEventListener('click', event => {
                let productyId = event.target.closest('.product').dataset.id;
                addProductToCart(productyId)
            })
        )
    }
}

function main() {
    
    // const addToCart = document.querySelector('.product-container-body .add-to-cart')
    
    initNav() 
    if (productContainer) {
        productContainer.innerHTML = populateProductList(products);

        addProductToCartButton()
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

