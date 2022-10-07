//FUNTIONS AS FRIST CLASS CITIZENS
//as can be treated as any other variable

//VERSION 1 ----------------------------------------------------------
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

//VERSION 2 ----------------------------------------------------------
function sayHello2() {
    return function () {
        return 'Hello World';
    };
}

let fn2 = sayHello2();
let message = fn2();


