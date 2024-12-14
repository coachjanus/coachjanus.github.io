"use strict"

function fn1() {
    var message = "Hello";
    console.log(message);
}

fn1();

var message = "Hello";
function fn2() {
    
    console.log(message);
}

fn2();

function fn3() {
    message = "Hello world";
    console.log(message);
}

fn3();

function fn4(message) {
    
    console.log(message);
}

fn4("Hello function ");


function fn5(text) {
    return "Hello " + text;
    
}
console.log(fn5("function with args"));

// sayHello();
// Uncaught ReferenceError: can't access lexical declaration 'sayHello' before initialization

let sayHello = function() {
    console.log("Hello fx");
}

sayHello();


let add = function(x, y) {
    return x + y;
}

console.log(add(6, 7));

let div = (x, y) => x / y;
console.log(div(6, 7));

(
    function() {
        // 
    }
)();

(() => {})();


function hi(name) {
    console.log("Hello " + name);
}

function hiThere(cb) {
    const name = "John Doe";
    cb(name);
}

hiThere(hi)

