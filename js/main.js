"use strict";

let res = square(55);
// hoisting 
function square(n) {
    return n * n;
}

// let res = square(55); 
console.log(res);

// console.log(sqr(55)); 
const sqr = function(n) {
    return n * n
}
console.log(sqr(55));

function cartTotal(price, amount, tax=0.07, bonus=0.0) {
    let subTotal = 0;
    subTotal += parseFloat(+price * +amount).toFixed(2);
    // console.log(subTotal)
    let cartTax = (subTotal * +tax).toFixed(2);
    // console.log((subTotal * +tax).toFixed(2))
    let res = (+subTotal + +cartTax - bonus).toFixed(2);
    return res;
}

// console.log(cartTotal(123.555, 5, 0.2, 20))
// console.log(cartTotal(123.555, 5, 0.2))
console.log(cartTotal(123.555, 5))

// () => "Hello Arrow"
// const asqr = (n) => n * n;
const asqr = n => n * n;
console.log(asqr(55));
let hell = () => "Hello Arrow"
console.log(hell());

let defoult = () => "Defoult value"

console.log(0 ?? defoult());
console.log(null ?? defoult());
console.log(undefined ?? defoult());

let is_Member = false;
let message = is_Member ? "Welcome back!" : "You need to login!"
console.log(message)

if (is_Member) {
    message = "Welcome back!"
} else {
    message = "You need to login!"
}

function recFn(n) {
    if (n === 0) {
        console.log("Task completed!")
        return
    }
    console.log("I'm doing something.")
    recFn(n - 1)
}

recFn(4)

function hi(name) {
    console.log("Hello " + name)
}

function getName(callback) {
    const name = "Cat"
    callback(name)
}

getName(hi)

{

}
// const obj = {}

function createProduct(name, price) {
    const obj = {}
    obj.name = name
    obj.price = price
    return obj
}

const product1 = createProduct("Product 1", 123)
const product2 = createProduct("Product 3", 222)

console.log(product2)

product2.stars = 5

console.log(product2)

console.log(Object.hasOwn(product1, 'stars'))
product1['stars'] = 2
console.log(Object.hasOwn(product2, 'stars'))
console.log(Object.hasOwn(product1, 'stars'))


const numbers = [1,2,3,4,5,6,7]
console.log(numbers.length)

console.log(numbers[numbers.length-1])
console.log(numbers[0])
numbers.push(567)
console.log(numbers)
numbers.unshift(44)
console.log(numbers)
numbers.shift()
console.log(numbers)
numbers.pop()
console.log(numbers)

console.log(numbers.indexOf(5))
console.log(numbers.includes(3))

console.log(numbers.slice(2, 5))

for (let i=0; i < numbers.length; i++) {
    console.log(numbers[i])   
}

function main() {
    console.log("Hello World")

}

(() => main())();

