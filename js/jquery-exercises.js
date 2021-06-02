// $(document).ready( function () {
//     alert("window has finished loading");
// })


// $(".codeup").css({
//     "border-style": 'solid',
//     "border-color": 'red',
// })

$("li").click(function() {
    alert("What it do")
    $(this).css({
        "font-size": "20px",
        "list-style": "none",
    })
});

$("p").dblclick(function(){
    alert("NOW LOOK AT WHAT YOU'VE DONE");
    $(this).css("font-size","18px");
});

$("h1").click(function () {
    alert("what a cool header!")
});