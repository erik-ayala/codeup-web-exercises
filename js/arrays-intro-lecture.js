(function () {
    "use strict";

    //array- []
    // var myArr = ["dog","cat", "fish"] // <-- each comma-delimited value is an element
    // console.log(Array.isArray(myArr));
    //

    // console.log(myCharacteristics.length);
    // first element in an array has an index of 0
    // the last element in an array has an index of (length - 1)
    // access elements with str[] method
    // var myCharacteristics = ["Erik", "Student", "27"]; // 0, 1, 2
    // console.log(`Hello my name is ${myCharacteristics[0]}, I am a ${myCharacteristics[1]}, and I am ${myCharacteristics[2]}!`);

//TO DO: Mini Exercise
//     function whatIWillEatToday (myFood) {
//         var myFood = ["pizza", "hot dog", "tacos", "burger", "beer"]
//         for (let i = 0; i <= myFood.length; i++) {
//             console.log(`Today I will eat ${myFood[2]}`)
//         }
//     }
//
// whatIWillEatToday();

    //For Each function


    //TODO:
    // .length - SUPER IMPORTANT
    // .forEach() - ALSO IMPORTANT
    // FOR loop always important!

    // var days = ["monday,", "tuesday", "wednesday",];
    // console.log(days.length)
    // var newDays = days.push("thursday")
    // console.log(newDays)
    //
    // console.log()


    //  TODO: MINI-EXERCISE
    //   -> var days = ["Monday", "Tuesday", "Wednesday"];
    //   -> Create an array with the remaining days of the week
    //   -> Call .forEach() on that NEW array
    //   -> Inside the inline function you pass into .forEach():
    //       -> add the remainingDay of the week to the old array
    //   -> When the loop completes, console.log() the completed day of the week array



        var remainingDays = ["Tuesday", "Wednesday", "Thursday", "Friday"]

        remainingDays.unshift("Monday")

        remainingDays.forEach(function (name) {
            console.log(name)
        })



    // TODO - MINI EXERCISE
//  -> Let's reverse engineer our days of the week array
//  -> Make sure to console.log in order to see your code's behavior!
//  -> Write a function which takes in your complete days of the week array
//      -> It will eventually return your reverse-engineered array
//  -> Using a FOR LOOP (not .forEach())
//      -> pop() each item off the days array
//      -> use the returned value from pop() to unshift the element
//      -> on to the new array
//  -> HINT: You may find that the loop doesn't behave as expected
//      -> console.log EVERY possible thing which could change as your loop runs
//          -> consider how the methods you are using change state of the array

    // console.log(remainingDays);
    //
    //     function reverseEng(input) {
    //         input;
    //         var newDays = input.pop()
    //
    //         for (var i = 0; i < input.length +1; i++) {
    //             console.log(input)
    //             input.pop()
    //             i = 0
    //         }
    //         console.log()
    //     }
    //
    //     reverseEng(remainingDays);












}) ();