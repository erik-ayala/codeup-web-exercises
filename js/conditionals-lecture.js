(function() {
    "use strict";

    // var hasCar = false
    // if (hasCar) {
    //     console.log("Let's get in and go!");
    // } else {
    //     console.log("We need to call a rideshare!");
    // }

    // var age = 22;
    // var isLicensed = age >= 16;
    // var isInsured = true;
    // var isLegalDriver = isLicensed && isInsured;
    // var hasCar = true;
    //
    // if (isLegalDriver && hasCar) {
    //     console.log("Get in boiii.")
    // } else {
    //     console.log("We need an uber")

//     function getToDestination (age, isInsured, hasCar,) {
//         var isLicensed = age >= 16;
//         var isLegalDriver = isLicensed && isInsured
//
//         if (isLegalDriver && hasCar) {
//             console.log("Let's get in and go!");
//         } else if (!isLegalDriver && canGetRideshare()) {
//             console.log("Let's get a rideshare!");
//         } else {
//             console.log("I think my friend can give us a lift!");
//         }
//     }
//
// getToDestination();
//
//     function canGetRideshare(location, funds, Driversaround) {
//         var location = 15
//         var driversNear = location <= 20
//         var funds = 30
//         var canAfford = funds > 15
//         var Driversaround = true
//
//         if (driversNear && canAfford && Driversaround) {
//             return true;
//         }else {
//             console.log("No ride 4 u.");
//             return false;
//         }
//         }
// canGetRideshare();

    //Ternary Statements


    // Switch Statements

    function nameThatFruit(fruit) {

        switch(fruit) {

            case "apple":
                console.log("This is an apple");
                break;
            case "orange":
                console.log("This is an orange.");
                break;
            case "banana":
                console.log("This is a banana.");
                break;

            default:
                console.log("Idk probs not a fruit.")

        }
    }
nameThatFruit();


} )()