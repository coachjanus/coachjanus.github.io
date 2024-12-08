"use strict"
// comment

/**
 * comment
 */

let a = 2
const A = 3

let a1 = 21
let A_12qwert = "hello"
const _rat = "Rat"
const $_my_var = 123

let b = 2
a + b

const product_container = ""
const productContainer = ""

{
    let p = "Hello p"
    console.log(typeof(p))
    // alert(p)
}

// p = "my p"

// alert(p)

var w = "my w"


{
    let p = 6666
    w = 7777
    console.log(w + p)
}

// if = 123 error

// let confi = confirm("Well, let's go?")

// Boolean

// console.log(confi) // true | false 

console.log(1 + 2 === 3)
console.log(0.1 + 0.2 === 0.3)

// let x = prompt("Enter x = ", "0")

// let y = prompt("Enter y = ", "0")

// console.log(x + y)

// console.log(+x + +y)

let person = {
    firstName: "John",
    lastName: "Doe"
}

console.log(typeof(person))
console.log(typeof(null))
console.log(typeof(undefined))


// let x = prompt("Enter x = ", "0")
// let y = prompt("Enter y = ", "0")
// console.log("x: ", isNaN(x))

// if (isNaN(x) && isNaN(y)) {
//     console.log("x or y is not a number: ")
// }
// else {
//     console.log(+x + +y)
// }


// if (!isNaN(x) && !isNaN(y)) {
//     console.log(+x + +y)
   
// }
// else {
//     console.log("x or y is not a number: ")
// }

// console.log(x + y)

// console.log(+x + +y)

// calculator

let x = prompt("Enter x = ", "0")
let y = prompt("Enter y = ", "0")
let o = prompt("Enter operation = ", "+")

// + - * /

if (!isNaN(x) && !isNaN(y)) {

    x = +x
    y = +y

    if (o == "+") {
        console.log("x + y = ", x + y)
    }
    else if (o == "-") {
        console.log("x - y = ", x - y)
    }
    else if (o == "*") {
        console.log("x * y = ", x * y)
    }
    else if (o == "/") {
        if (y !=0) {
            console.log("x / y = ", x / y)
        } else {
            console.log("Zero dividing")
        }
        
    }
    else {
        console.log("Bad operation")
    }
}
else {
    console.log("x or y is not a number: ")
}

switch (o) {
    case '+':
        console.log("x + y = ", x + y)
        break
    case '-':
        console.log("x - y = ", x - y)
        break
    // 
    default:
        console.log("Bad operation")
}