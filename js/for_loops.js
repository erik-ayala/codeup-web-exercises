(function () {

    // function showMultiplicatonTable(num) {
    //     var num;
    //     for (var i = 1; i <= 10; i++) {
    //         var answer = i * num
    //         console.log(`${num} x ${i} = ${answer}`);
    //     }
    // }
    // showMultiplicatonTable(8);
    //
    //
    //
    // for(var x = 1; x <= 10; x++) {
    //     var randomNumber = Math.floor(Math.random() * 20) + 200;
    //     if (randomNumber % 2 === 0) {
    //         console.log(`${randomNumber} is Even.`)
    //     } else {
    //         console.log(`${randomNumber} is Odd.`)
    //     }
    // }

    //----------------------------------------
    // 1
    // 22
    // 333
    // 4444
    // 55555
    // 666666
    // 7777777
    // 88888888
    // 999999999

    // let pyramidNumLog = () => {
    //     for (var i = 1; i <= 9; i++) {
    //         let addOne = '';
    //         for (let x = 1; x <= i; x++) {
    //             addOne += String(i);
    //         }
    //         console.log(addOne)
    //     }
    // }
    // pyramidNumLog();

    function pyramindSymbol(input) {
        for (let i = 1; i <= input; i++) {
            var addOne = '';
            for (let x = 1; x <= i; x++) {
                addOne += String(i);
                var star = addOne
            }
        console.log(addOne)
        }
    }
pyramindSymbol(5);


//-------------------------------------
//     for(var i = 100; i >= 1; i--) {
//         if (i % 5 === 0) {
//             console.log(i);
//         } else {
//         }
//     }



})();