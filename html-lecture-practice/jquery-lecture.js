$("#all-caps").hide();

$("span").hide();

$(".show-me").show();

$(".container> div:nth-child(1)").append("<img src='https://www.rd.com/wp-content/uploads/2020/04/GettyImages-694542042-e1586274805503.jpg' height='50px' width='600px' >")

$("#pink").css("background-color", "pink");

$("#orange").css("background-color", "orange");

$(window).load(function (){
    $("#orange").hide()
});

$(document).ready( function () {
    $("#pink").hide()
});

$("#content-toggle li").hover(function () {
    $(this).text("Where did my content go?")
});

// $('#font-change').click(function () {
//     $('this').css("font-family", "Quantico")
// })