//FUNCTIONAL PROGRAMMING

/* MAIN CONCEPTS
1) Functions as first class citizens
2) High Order functions
3) Function Composition
*/


//==========================================================================================
//FUNTIONS AS FRIST CLASS CITIZENS
//as can be treated as any other variable

//FUNTIONS AS FRIST CLASS CITIZENS - VERSION 1 ----------------------------------------------------------
function sayHello() {
        return 'Hello World';
}

//Set reference or alias
let fn = sayHello;

//fn() or  sayHello()   is the same to call

function greet(fnMessage) {
    console.log(fnMessage());
}

greet(sayHello);

//FUNTIONS AS FRIST CLASS CITIZENS - VERSION 2 ----------------------------------------------------------
function sayHello2() {
    return function () {
        return 'Hello World';
    };
}

let fn2 = sayHello2();
let message = fn2();

//==========================================================================================
//HIGH ORDER FUNCTIONS
//Is a function that takes a function as arg or returns it or both.

//HIGH ORDER FUNCTIONS - VERSION 1 ----------------------------------------------------------
function greet(fn) {
    console.log(fn());
}

function sayHello3() {
    return function () {
           return 'Hello World';
   };
}

//Examples of common usage

let numbers = [1,2,3];
numbers.map(number => number * 2);

setTimeout(() => console.log('hello pausing'), 1000);

//==========================================================================================
//Function composition
//Is a function 

//FUNCTION COMPOSITION - VERSION 1 ----------------------------------------------------------

//None functional example
let input = '   Javascript   '
let output = '<div>' + input.trim() + '</div>'

//example functional
const trim = str = str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

wrapInDiv(toLowerCase(trim(input)));
//See above.. does the stuff but to confussing and many () to mantain

//FUNCTION COMPOSITION - VERSION 2 WITH LODASH ----------------------------------------------------------



