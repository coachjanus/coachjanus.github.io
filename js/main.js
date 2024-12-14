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

const p1 = createProduct('Product 1', 12, 1);
const p2 = createProduct('Product 2', 21, 2);


console.dir(p1)
console.dir(p2)

console.dir(Object.keys(p2))


console.dir(Object.values(p2))
console.dir(Object.entries(p2))

let a1 = Object.keys(p2);
for (let i=0; i<a1.length; i++) {
    console.log(a1[i]);
}


const xmark = document.getElementById('xmark');

console.dir(xmark)

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

function main() {
    initNav();
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
