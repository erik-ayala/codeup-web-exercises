(function () {



    // prompt user for odd number number 1 -50
    // use loop and break statement to continue asking for odd
//     function oddNumber () {
//         do {
//             var userInput = prompt("Enter an odd number from 1-50.")
//         } while (userInput % 2 === 0);
//     }
// oddNumber()
//

    //all odd numbers 1-50 except for 27
for (var x = 1; x <= 50; x++) {
      if (x % 2 === 1) {
          console.log(`Here is an odd number: ${x}`);
      } while ( x === 27) {
        console.log(`Yikes we are skipping ${x}`)
        break;
    }
}



})();