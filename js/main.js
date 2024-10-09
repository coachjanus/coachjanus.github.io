"use strict";
// string '' "" 

let msg='Hello javascript';//alert (msg);
// alert("Hello world")

// bool true = 1 false = 0 00000001 00000010 00000011
// let ans = confirm("Well, let's go?")
// console.log(ans) // true -> ok  false -> cancel 

// if (ans == true) {
//     console.log(msg)
// }
// else {
//     console.log("Well, let's go?")
// }




let x = prompt("enter x ", 0)
let y = prompt("enter y ", 0)
let o = prompt("enter operator ", '+')

console.log('Type x: ', typeof x)
console.log('Type y: ', typeof(y))
// console.log('x + y = ', +x + +y)
// console.log('x + y = ', parseInt(x) + parseInt(y))
x = parseFloat(x)
y = parseFloat(y)

// and && 
if (!isNaN(x) && !isNaN(y)) {
    console.log('x + y = ', x + y)
}
else {
    console.log('x or y is NuN')
}
// console.log('x + y = ', parseFloat(x) + parseFloat(y))


switch (o) {
    case '+':
        console.log('x + y = ', x + y)
        break
    case '-':
        console.log('x - y = ', x - y)
        break
    case '/':
        console.log('x / y = ', x / y)
        break
    default:
        console.log('operator is not defined')

}