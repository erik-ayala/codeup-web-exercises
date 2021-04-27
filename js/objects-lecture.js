(function(){
    "use strict";


    // var iAm = new Object();
    // console.log(iAm);
    //
    // //Object Literal
    // var aboutMe = {};
    // console.log(aboutMe);
    //what is a custom object?
    //creating something because it is not automatically built in
    //
    //syntax
    var aboutMe = {
        name: "Erik",
        age: 27,
        favoriteTeam: "Spurs",
        city: "San Antonio"
    }
    console.log(aboutMe);
// Adding a new value to object: Dot notation
    aboutMe.food = "pizza"
    console.log(aboutMe);

    //Adding a new value to object: Bracket Notation
    aboutMe["Job"] = "Student";
    console.log(aboutMe);

    var theSpurs = {};
        theSpurs.city = "San Antonio"
        theSpurs.coach = 'Greg "Pop"'
        theSpurs.sport = "Basketball"
    console.log(theSpurs);

        theSpurs["numOfPlayers"] = 16
        theSpurs["numOfChampsWon"] = 6
        theSpurs["isBestTeam"] = true

    console.log(theSpurs);

    console.log(theSpurs.sport, theSpurs.numOfPlayers);


    /// Adding function

    theSpurs.goSGo = function() {
        return "GO SPURS GO!"
    }

    console.log(theSpurs.goSGo());


    var myZoo = [
        {
        name: "San Antonio Zoo",
        city: "San Antonio",
        isOpen: false,
        ranking: "numbah 1",
        yearOpened: "1776",
         animalinfo: [
             {
                 name: "dog",
                 hasFur: true,
                 canFly: false,
                 isMammal: true,
                 sound: function () {
                     return 'Woof!'
                 }
             },
             {
                 name: "Bird",
                 hasFur: false,
                 canFly: true,
                 isMammal: false,
                 sound: function () {
                     return "chrip!"
                 },
             },
         ]},
    ];



})();