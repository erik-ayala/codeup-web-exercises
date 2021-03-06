//make sure the DOM is loaded first
document.addEventListener("DOMContentLoaded", function () {
    addListeners();
});
//parent method for adding all listeners
// function addListeners(){
//     //get the elements to add listener and change image
//     let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
//     addEvents(cardContainers, '/html-lecture-practice/jazz-music-rubber-duck.jpeg', 'mouseover');
//     addEvents(cardContainers, '/html-lecture-practice/question.png', 'mouseout');
// }
// //add mouseover/mouseout events to all selected elements
// function addEvents(cardContainers, imgPath, listenerType){
//     cardContainers.forEach((cc) => {
//         let card = cc;
//         //create listener which will call function change the image
//         let listener = function (event) {
//             let cardImg = card.querySelector(".card .card-img-top");
//             changeImage(cardImg, imgPath);
//         };
//         cc.addEventListener(listenerType, listener);
//     });
// }
// //actual function to swap images
// function changeImage(card, imgPath){
//     card.setAttribute('src', imgPath);
// }
//

$(document).ready(function () {

    //TODO: When the user clicks the button with the id of 'submitBtn,' the background color of #override-bootstrap changes to 'red'
    $('#submitBtn').click(function () {
        $("#override-bootstrap").css("background-color", "red")////
    });
//TODO: When the user clicks a .card-text element, change its background color to 'red'
    $('.card-text').click(function () {
        $(this).css("background-color", "red")
    })

    //TODO: Add a new button to the html, directly below the first button. Give it an id of 'resetBtn'.
    // -> When the user clicks that button, the page should reload. (HINT: BOM has a super easy method for reloading the page. You'll still need a click event)
    $("#resetBtn").click( function () {
        location.reload();
    })

    //TODO: When the user clicks the element with the id #main-title, its text font size doubles
    $('#main-title').click(function () {
        $(this).css("font-size", "400%")
    })
});
