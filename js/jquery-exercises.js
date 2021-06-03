// $(document).ready( function () {
//     alert("window has finished loading");
// })


// $(".codeup").css({
//     "border-style": 'solid',
//     "border-color": 'red',
// })

$("li").hover(function() {
    $(this).css({
        "color": "red",
        "list-style-type": "none"
    })
},function () {
    $(this).css({
        "color": "black",
    })
});

$("p").dblclick(function(){
    $(this).css("font-size","18px");
});

$("h1").click(function () {
    $(this).css('background-color', "yellow")
});