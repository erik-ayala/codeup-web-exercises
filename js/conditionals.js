(function() {
    "use strict";

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined below, if the color passed is not
     * one of the ones defined below, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

    // function analyzeColor(input) {
    //     if (input === "blue") {
    //         return "Blue is the color of the sky."
    //     } else if (input === "red") {
    //         return "Red is the color of oranges."
    //     } else if (input === "cyan") {
    //         return "I don't know anything about cyan."
    //     } else {
    //         return "This is too many colors now."
    //     }
    // }

// console.log(analyzeColor("yellow"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */

// console.log(analyzeColor(randomColor));
    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */

    // function analyzeColor(input) {
    //     switch (input) {
    //         case "red":
    //             return "red is a good color for apples";
    //             break;
    //         case "orange":
    //             return "orange is a good food.";
    //             break;
    //         case "yellow":
    //             return "yellow is the color of the sun";
    //             break;
    //         case "green":
    //             return "green is some good grass"
    //             break;
    //         case "blue":
    //             return "blue is the color of the sky"
    //             break;
    //         case "indigo":
    //             return "indigo a bad hotel i saw once"
    //             break;
    //         case "violet":
    //             return "violet is a flower sometimes";
    //             break;
    //     }
    // }

    // console.log(analyzeColor(randomColor));
    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

  //   function colorPrompt (input) {
  //       input = prompt("what is your favorite color?")
  //       return alert(`${input} is your favorite color!`)
  //   }
  //
  // colorPrompt();

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */

    // function calculateTotal (input, input2) {
    //     var discount = input
    //     switch (input) {
    //         case 1:
    //             return (input2 *.10);
    //         case 2:
    //             return (input2 * .25);
    //         case 3:
    //             return (input2 *.35);
    //         case 4:
    //             return (input2 * .50);
    //         case 5:
    //             return (input2 - input2);
    //     }
    //     return (input2 - discount);
    // }
    // console.log(calculateTotal(5, 50));

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
    // Generate a random number between 0 and 6
    // var luckyNumber = Math.floor(Math.random() * 5);
    //
    // function yourBill(input) {
    //
    //     input = prompt("What is your bill?")
    //     alert(`Hello! Your bill was ${input}`)
    //     alert(`Calculating lucky number... woah! You got ${luckyNumber}!`)
    //     alert(`Your new bill is ${calculateTotal(luckyNumber, input)}`)
    // }
    //
    // yourBill();

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */

    function yourNumber(input) {
       confirm("Would you like to enter a number?")
        input = prompt("What number do you want to input?")
        if (isNaN(input)) {
                alert("This number is NaN");
        }
        else
            {
                alert(isEven(input));
                alert(plusHundred(input));
                alert(isPositive(input));
            }
        }

yourNumber();
  //-----------------------------------------------------
    function isEven(num) {
        if (num % 2 ===0){
            return "It's Even"
        } else {
            return "It's False"
        }
    }
    isEven();
//--------------------------------------------------------------
    function plusHundred(num) {
        return (Number(num) + 100);
    }
    plusHundred();
//--------------------------------------------------------------
    function isPositive(num) {
        if (num > 0) {
            return "It's Positive!"
        } else {
            return "It's Negative like me >:("
        }
    }
    isPositive();
}) ();