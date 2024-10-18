import Store from "./store.js";

export default class Cart {

    cart = [];

    constructor(key = 'basket') {
        this.cart = Store.init(key);
    }

    saveCart(key = 'basket') {
        Store.set(key, this.cart);
    }

    addProductToCart(product, amount=1) {
        // console.dir(this.cart)
        let inCart = this.cart.some(item => item.id == product.id);
        // console.dir(inCart)
        if (inCart) {
            // console.dir(product)
            for (let item of this.cart) {
                if(item.id == product.id) {
                    item.amount += amount;
                    this.saveCart();
                    return;
                }
            }
        } else {
            let cartItem = {...product, amount: amount};
            
            this.cart = [...this.cart, cartItem];
            this.saveCart();
        }
            
    }

    addProductToCartButton(addToCartButtons, selector, amount=1) {
       

        addToCartButtons.forEach(element => 
            element.addEventListener('click', event => {
                // console.dir(event.target.closest(selector).dataset.id)
                // event.preventDefault();
                let productyId = event.target.closest(selector).dataset.id;
                let product = {id: productyId}
                // console.dir(product)
                this.addProductToCart(product);
            })
        ); 
    }
}