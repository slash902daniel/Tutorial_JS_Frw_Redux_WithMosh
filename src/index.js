//FUNCTIONAL PROGRAMMING

/* MAIN CONCEPTS
1) Functions as first class citizens
2) High Order functions
3) Function Composition
4) Currying
*/ 


//==========================================================================================
//1)FUNTIONS AS FRIST CLASS CITIZENS
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
//2)HIGH ORDER FUNCTIONS
//Is a function that takes a function as arg or returns it or both.

//HIGH ORDER FUNCTIONS - VERSION 1 ----------------------------------------------------------
function greet3(fn) {
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
//3)Function composition
//Is a function wrapper to call

//FUNCTION COMPOSITION - VERSION 1 ----------------------------------------------------------

//None functional example
let input = '   Javascript   '
let output = '<div>' + input.trim() + '</div>'

//example functional
const trim = str = str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));
//See above.. does the stuff but to confussing as
// and many () to mantain
//Read right to left

//FUNCTION COMPOSITION - WITH LODASH without PIPE----------------------------------------------------------
import  {compose, pipe} from 'lodash/fp';

const transform = compose(wrapInDiv, toLowerCase, trim);
transform(input);
//See above.. does the stuff but to confussing as
//Read right to left and need to mantain that order.

//FUNCTION COMPOSITION - WITH LODASH with PIPE----------------------------------------------------------

const transformWithPipe = pipe(trim, toLowerCase, wrapInDiv);
transformWithPipe(input);
//See above.. now read from left to right



//==========================================================================================
//4) Currying
//Is a ....way to chain multiple params to call in single one

//example functional

//const trim = str = str.trim();
//const wrapInDiv = str => `<div>${str}</div>`;
const wrapInSpan = str => `<span>${str}</span>`;
//const toLowerCase = str => str.toLowerCase();


//example functional 2 - simplify wrap with currying

//const trim = str = str.trim();
//const wrapInDiv = str => `<div>${str}</div>`;
const wrap = type => str => `<${type}>${str}</${type}>`;
//const toLowerCase = str => str.toLowerCase();

const transformWithPipe2 = pipe(trim, toLowerCase, wrap("div"));
transformWithPipe2(input);