import {halfOf, multiply} from './lib.js';
import doSomething from './doSomething.js';
import {flag, touch} from './validator.js';
import {Car, Vehicle} from './class.js';
import {parent} from './closures.js';

console.log(halfOf(3));
console.log(multiply(2, 3));

doSomething();

/**
 * validator
 */
console.log(flag);
touch();
console.log(flag);

/**
 * class
 */
let car = new Car('blue');
car.toString();

console.log(car instanceof Car);
console.log(car instanceof Vehicle);

/**
 * arrow functions
 */
let numbers = [1, 2, 3, 4, 5, 6, 7];
const squares = numbers.map(n => n * n);
console.log(`suqares : \n ${squares}`);

let evens = [];
numbers.forEach(n => {
    if (n % 2 === 0) {
        evens.push(n);
    }
});
console.log(`evens : \n ${evens}`);

const author = {
    fullName: 'Bob Alice',
    books: [],
    printBooks() {
        this.books.forEach(book => 
            console.log(book + ' by ' + this.fullName));
    }
}
let ary = [];
for (let i = 0; i < 10; i++) {
    ary.push(`Book ${i}`);
}
author.books = ary;
console.log(author.printBooks());

/**
 * let and const
 */
function iterateVar() {
    console.log('iterateVar: ');
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}
iterateVar();

function iterateLet() {
    console.log('iterateLet: ');
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    // console.log(i); // print undefined
}
iterateLet();


/**
 * javascript closures
 */
// example 1
parent();

// example 2
const childFN = parent();
// childFN(); // exception error because of childFN is not a function
