"use strict";

// alert("I swear I won't make you say 'hello world'");
//
// alert("I hope dogs dont get out again :/ ");

// alert("An old silent pond.");
//
// alert("A frog jumps into the pond.");
//
// alert("Splash! Silence again.");

// var userchoice = confirm("Would you like to continue?");
//
// if (userchoice == true) {
//     console.log("Let's continue")
// } else {
//     console.log("Alright be like that.");
// }

var userInput = prompt("What is your favorite movie?").toUpperCase();
if (userInput === "The Room".toUpperCase()) {
    alert("Oh, hi Mark.")
}else {
    alert("You chose " + userInput);
}