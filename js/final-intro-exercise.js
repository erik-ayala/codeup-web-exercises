"use strict";
// Final Intro Exercises

var a = 1;
var b = a++;
var c = ++a;

console.log(a);
console.log(b);
console.log(c);

//

var d = "hello";
var e = false;

d++;
e++;

console.log(d);
console.log(e);

//

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;

console.log(perplexed + 2);

//

var price = 2.7;
price.toFixed(2);

console.log(price.toFixed(2));

//

// var price = "2.7";
// price.toFixed(2);
//
// console.log(price.toFixed(2));

//

console.log(isNaN(0));

console.log(isNaN(1));

console.log(isNaN(""));

console.log(isNaN("string"));

console.log(isNaN("0"));

console.log(isNaN("1"));

console.log(isNaN("3.145"));

console.log(isNaN(Number.MAX_VALUE));

console.log(isNaN(Infinity));

console.log(isNaN("true"));

console.log(isNaN(true));

console.log(isNaN("false"));

console.log(isNaN(false));

console.log(NaN == NaN);

//

console.log(!true);

console.log(!false);

console.log(!!true);

console.log(!!false);

console.log(!!0);

console.log(!!-0);

console.log(!!1);

console.log(!!-1);

console.log(!!0.1);

console.log(!!"hello");

console.log(!!"");

console.log(!!'');

console.log(!!"false");

console.log(!!"0");

//

var sample = "Hello Codeup";

console.log(sample.length);
console.log(sample.toUpperCase());
console.log(sample + " Students!");
console.log(sample + " Students!".replace("Students", "Class"));
console.log((sample.indexOf("c")));
console.log(sample.indexOf("C"));
console.log(sample.substring(6,12));

// Example 1

var movie = 3;
var mermaid = 3 * movie;
var bear = 5 * movie;
var hercules = 1 * movie;
var howMuch = bear + mermaid + hercules
console.log(howMuch);

// Example 2

var Google = 400
var Amazon = 380
var Facebook = 350

console.log((Google * 6) + (Amazon * 4) + (Facebook * 10));


//Exercise 3

var full = 20
var schedule = 5

console.log(( 18 <= full ) && (3 <= schedule));


// Exercise 4

var items = 2
var offer = 30

console.log((10 > items) && (22 < offer));

// Last Exercise

var username = 'codeup'
var password = 'notastrongpassword'

console.log((password.length > 5) && (password.length < 20) && (trim(password)) );


