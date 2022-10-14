import { Map, map } from 'immutable';
import { produce } from 'immer'





//FUNCTIONAL PROGRAMMING

/* MAIN CONCEPTS
1) Functions as first class citizens
2) High Order functions
3) Function Composition
4) Currying
5) Pure Functions
6) Inmutability
7) EXERCISES (Ubdating objects)
8) EXERCISES (Ubdating arrays)
9) POPULAR LIBRARIES
10) Immtable js Library
11) Immer Library
12) REDUX
13)
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
const trim = str => str.trim();
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


//==========================================================================================
//5) PURE FUNCTIONS
//Is alwayas called with same ARGS = same result

//CANNOT USE:
//No random values
//No current date/time
//No global state (DOM, files, db, etc)
//NO mutation of parameters (are inmutable)

//BENEFITS:
//Self-documenting
//Easily testable
//Concurrency
//Cacheable

function notPurefunction(number) {
    return number * Math.random();
}

function purefunction(number) {
    return number * 2;
}

function isElegible(age) {
    return age > minAge;
    //canot be pure as minAge is global an can change
}

//==========================================================================================
//6) INMUTABILITY
//In JS Objects/Arrays are mutable 
//SO JS is not a PURE Functional Programing language

//PROS:
//Predictability
//Faster Chnage Detection
//Concurrency

//CONS
//Performance *for may obj
//Memory overhead   *can be tacke with "Structural sharing"

//==========================================================================================
//7)EXERCISES (Ubdating objects):

const person = {
    name: "John",
    address: {
        country: "USA",
        city: "San Francisco"
    }
};

//Option 1
const updated = Object.assign({},person,{name: "Bob", age: 30})
console.log(updated);

//Option 2 (Spread operator) - pure copy
const updated2 = {...person};
console.log(updated2);

//Option 3 (Spread operator) - mod copy
const updated3 = {...person, name: "leo"};
console.log(updated3);

//Option 4 (Spread operator) - mod copy - 
//BEWARE nested .. share memory the change afect both!
const updated4 = {...person, name: "leo"};
updated4.address.city = "NY";
console.log(updated4);
console.log(updated);

//Option 5 (Spread operator) - mod copy - 
//BEWARE nested .. to AVOID afect both! you need to do
//DEEP COPY (is more verbose)
const updated5 = {
    ...person, 
    address: {
        ...person.address,
        citi: "New York"
    },
    name: "Bob"
};
updated5.address.city = "NY";
console.log(updated5);

//==========================================================================================
//8)EXERCISES (Ubdating arrays):

const numberss = [1,2,3];

//Adding new at beginning
const index = numberss.indexOf(2);

//Adding specific position
const addedv1 = [
    ...numberss.slice(0,index),
    4,
    ...numberss.slice(index)
    ];

//Adding new at beginning
const addedv2 = [4,...numberss];

//Adding new at end
const addedv3 = [...numberss, 4];

//Removing
const removev1 = numberss.filter(n => n !== 2);

//Updating
const updatedv1 = numberss.map(n => n === 2 ? 20 : n);
console.log(updatedv1);

//==========================================================================================
//9)POPULAR LIBRARIES
/*
Immutable js
Immer
Mori
*/

//REGULAR MUTABLE - EJEMPLO
let book = { title: "Harry Potter"}

function publish(book) {
    book.isPublished = true;
}

publish(book);
console.log(book);


//==========================================================================================
//10)IMMUTABLE js (LIBRARY)

//EJEMPLO
let book2 = Map({ title: "Harry Potter"})

function publish2(book) {
    return book.set("isPublished", true);
}
console.log(book2.toJS);

book2 = publish2(book2);
console.log(book2.toJS);


//PROBLEM cannot access by REGULAR methods..so we need to learn a new api
//hard to integrate with plain JS objects

///REGULAR                 ==>  INMUTABLE 
//console.log(book.title); ==> console.log(book.get('title'));
//console.log(book);       ==> console.log(book.toJS);


//==========================================================================================
//11)IMMER (LIBRARY)

let book3 = { title: "Harry Potter"}

function publish3(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    });
}

let updatedBook = publish3(book3);
console.log(book);
console.log(updatedBook);

//==========================================================================================
//12)REDUX

/*
For a bug tracking application:

STEPS:
1)Design the Store
2)Define the actions
3)Create a reducer
4)Setup the store
*/

//==========================================================================================
//1)Design the Store

/*
    [
        { 
            id: 1,
            description: "",
            resolved: false
        },
        { ... },
        { ... },
    ]
*/

//==========================================================================================
//2)Define the actions
/*
Add a Bug
Marck as Resolved
Delete a Bug


example of object:

    {
        type: "ADD_BUG", --> only property that redux expects
        description: "..."
    }



    A common approach based in FLEX
    Pro - common and consistent structure

    {
        type: "bugAdded", --> only property that redux expects
        payload: {
            id: 1,
            description: "...",
            others: '...',
        }
    }



*/


//==========================================================================================
//3) Create a reducer

//==========================================================================================
//4) Setup the store

import store from './store';
//unsubscribe   if user navigates to ther page  --> avoid memory leaks
//Subscribe     any user action in the page
const unsubscribe = store.subscribe(() => {
    //Used for UI to reload/refresh page elements
    console.log('store changed!', store.getState());
});

//Empty as nothing submitted
console.log(store.getState());

//Add a bug
store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug1"
    }
});
console.log(store.getState());

unsubscribe(); //user navigates away! 

//Delete a bug
store.dispatch({
    type: "bugRemoved",
    payload: {
        id: 1,
    }
});
console.log(store.getState());

