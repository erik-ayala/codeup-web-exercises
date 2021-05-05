//
//
// function getSquare(input) {
//     if (isNaN(Number(input)) || input === null) {
//         return false;
//     } else {
//         return input * input;
//     }
// }
//
// console.log(getSquare(null));
// ///----------------------------------------------------------
// function getReverse(string){
//     if (typeof string === "string" ){
//         // return string.reverse
//         return string.split("").reverse().join("");
//     }else{
//         return false;
//     }
// }
//
// console.log(getReverse("Hello How are you"));
//
// ///////---------------------------------------------------------
// function multiplySquares(input1,input2) {
//     var square1 = input1 * input1;
//     var square2 = input2 * input2;
//
//     if (isNaN(input1) && isNaN(input2)) {
//         return false;
//     } else {
//         return square1 * square2;
//     }
// }
// console.log(multiplySquares(4,5));
// /////-------------------------------------------------------------
//
//
//
// function multiplySquares(input1, input2) {
//     if (input1 === null || input2 === null || isNaN(Number(input1)) || isNaN(input2)) {
//         return false;
//     } else {
//         return (Math.pow(input2, 2) * Math.pow(input1, 2));
//     }
// }
//     console.log(multiplySquares('cat' , 2))
//
// ///-----------------------------------------------------
//
// function addTo(input) {
//     input = parseInt(input);
//     if (isNaN(input)) {
//         return false
//     }
//     input += 3
//     return input;
// }
//
// console.log(addTo(9))
//
//
// //////---------------------------------------------------
//
//
//
// /////--------------------------------------------------
// function getLowestNumber(input1,input2,input3) {
//     var confirmedNum = isNaN(parseInt(input1));
//     var confirmedNum2 =isNaN(parseInt(input2));
//     var confirmedNum3 = isNaN(parseInt(input3));
//
//     if (confirmedNum || confirmedNum2 || confirmedNum3) {
//         return false;
//     } else {
//         return Math.min(input1, input2, input3);
//     }
// }
//
// console.log(getLowestNumber("cat",10,2));


//----------------------------------------------------------

function lastLetter(input) {
    return input.charAt(input.length()-1);
}

console.log(lastLetter("Better Now"));