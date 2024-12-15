"use strict"

const address = {
    street: '1/2 New Avenue',
    city: 'New Heaven',
    country: 'Ukraine'
}

address['street']

const contacts = {
    address:  {
        street: '1/2 New Avenue',
        city: 'New Heaven',
        country: 'Ukraine'
    }
}

contacts.address.city


function createProduct(name, price, category) {
    const obj = {};
    obj.name = name;
    obj.price = price;
    obj.category = category;
    return obj;
}

// const p1 = createProduct('Product 1', 12, 1);
// const p2 = createProduct('Product 2', 21, 2);


// console.dir(p1)
// console.dir(p2)

// console.dir(Object.keys(p2))


// console.dir(Object.values(p2))
// console.dir(Object.entries(p2))

// let a1 = Object.keys(p2);
// for (let i=0; i<a1.length; i++) {
//     console.log(a1[i]);
// }


const xmark = document.getElementById('xmark');

// console.dir(xmark)

const hero = document.querySelector('.hero .container h1');
hero.textContent = "25% off on new season";

// hero.style.color = "red";

hero.classList.add('h1');

const appNav = document.querySelector('.app-nav');
const appNavHide = document.querySelector('.app-nav--hide')

const appNavShow = document.querySelector('.app-nav-show')

const hamburger = document.getElementById('hamburger');

const hideNav = () => {
    appNav.classList.add('app-nav__hide')
    appNav.classList.remove('app-nav__show')
    appNavShow.classList.toggle('hamburger')

}

const showNav = () => {
    appNav.classList.toggle('app-nav__hide')
    appNav.classList.toggle('app-nav__show')
    appNavShow.classList.toggle('hamburger')
}


function initNav() {

    appNavHide.addEventListener('click', hideNav)
    hamburger.addEventListener('click', showNav)

    appNavHide.addEventListener('touched', hideNav)
    hamburger.addEventListener('touched', showNav)
}


const productItemTemplate = (product) => `
<div class="card product" data-id="${product.id}">
    <div class="card-figure">
        <figure class="image badge badge-${product.badge}">
            <img src="${product.image}" alt="${product.name}">
        </figure>
    </div>
    <div class="card-body">
        <h3 class="card-title">${product.name}</h3>
        <div class="product-meta">
            <div class="product-price">${product.price}</div>
            <div class="icon-actions">
                <a class="icon icon--inline fas fa-shopping-cart add-to-cart"></a>
                <a class="icon icon--inline fas fa-heart add-to-wishlist"></a>
                <a class="icon icon--inline fas fa-eye"></a>
            </div>
        </div>
    </div>
</div>
`;

const populateProductList = products => {
    let content = "";
    products.forEach(item => content += productItemTemplate(item));
    return content;
}

 
class Store {

    static init(key) {
        if (!Store.isset(key)) {
            Store.set(key, []);
        }
        return Store.get(key);
    }

    static get (key) {
        let value = localStorage.getItem(key);
        return value === null ? null : JSON.parse(value);
    }

    static set (key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    }

    static isset(key) {
        return Store.get(key) !== null;
    }
}

class CartItem {
    constructor(id, amount) {
        this.id = id;
        this.amount = amount;
    }
}




function main() {
    initNav();
    
    let cart = [];

    cart = Store.init('basket');

    // saveCart = () => Store.set('basket', cart)


    const productContainer = document.querySelector('.product-container');

    if (productContainer) {
        // console.log(productContainer);
        // const addToCartButtons = document.querySelectorAll('.add-to-cart');

        productContainer.innerHTML = populateProductList(products);

        const addToCartButtons = productContainer.querySelectorAll('.add-to-cart');
        // console.log(addToCartButtons);



        addToCartButtons.forEach((item) => {
            // item.addEventListener('click', () => console.log(item))

            item.addEventListener('click', (event) => {
                let productId = event.target.closest('.product').dataset.id;
                console.log(productId);

                let cartItem = new CartItem(productId, 1);
                cart.push(cartItem);
                // saveCart();
                Store.set('basket', cart)

            });
        })
    }
}

(
    () => {
        if(document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", main)
        } else {
            main()
        }
    }
)()
