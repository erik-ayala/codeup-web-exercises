//Loops in programing

// Iteration:every loop is an iteration
//repition of a process to find a answer

//infinite loops: avoid them... will crash browser


//While loops
// while loop will continue to run code until the condition is FALSE
// be careful with while loops make sure that the condition will meet false
//checks condition before running code

//SYNTAX:
//js keyword is "while"
//condition you are checking against will go inside of these parentheses
//

// while(/*condition*/) {
//     // body
// }

// numOfSteps = 0;
// while (numOfSteps <= 30) {
//     console.log('starting iteration at: ${numOfSteps}' );
//     console.log('keep walking, youre at : ' + numOfSteps + " steps");
//     numOfSteps = numOfSteps + 10;
//     console.log("ending iteration at: " + $(numOfSteps));
//     console.log("--------------------------")
// }

// // TODO: MINI EXERCISES
// // TODO: print all even numbers between 0 and 25;
// // TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// // correct password is given.
// hint: start by defining the correct password and don't forget to link your html file

// var number = 0
// while (number <= 25) {
//     if(number % 2 === 0) {
//         console.log(number);
//     }
//     number++;
// }
//
// var userPassword = "codeup123";
// var userInput = prompt("Enter Password")
//
// while (userInput !== userPassword) {
//     alert('Not the correct password');
//     userInput = prompt("enter password again.")
// }
// alert("enter.")

// var numStudents = 0; //variable holding set of students starting at 0
// do {
//     var desksAvailable = 20 -numStudents;
//     console.log('we have ' + desksAvailable + 'amount of desks left');
//     numStudents++
// } while (numStudents <= 20)
//
// console.log("sorry this class is full")

//example: sing happy birthday every year and when they reach 16 say "you got a car"
// variable = age starting point

// var age = 0 //starting point
//
// do {
//     //sing a song
//     console.log(`happy bday you're now ${age} years old!`)
//     // increment
//     age++
// } while (age <= 16) //
//
// // log too old no more celebrations
// console.log("too old, get a job")


// var spaces = 0
//
// do {
//     spaces = spaces + 2
//     console.log(`This is how many spaces are available: ${30 - spaces} `);
// } while (spaces <= 30)
// console.log("Parking spot if full now.");

// function countDown() {
//     for(let i = counter; i > 0; i--) {
//         console.log("second: " + i);
//     }
// }
// for(let i = 0; i <= 5; i++) {
//     console.log("first: " + i);
//     var counter = i;
//     if(i === 5) {
//         countDown();
//     }
// }

// TODO: Loop through a set of numbers (0-30), if the number you're currently at is even, add 2 to it. If it's an
//  odd number, print "odd"
// // HINT: remember the remainder operator (modulo)

for(let i = 0; i <= 30; i++) {

}