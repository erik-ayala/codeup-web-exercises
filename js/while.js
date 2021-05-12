(function () {
//-----------------------------------
    // 2
    // 4
    // 8
    // 16
    // 32
    // 64
    // 128
    // 256
    // 512
    // 1024
    // 2048
    // 4096
    // 8192
    // 16384
    // 32768
    // 65536


    // var x = 2
    // while (x <= 65536) {
    //     console.log(x);
    //     x *= 2;
    // }



//-------------------------------------------

//ice cream seller needs to sell all cones
//generate a random number between 50 to 100.. math.floor
//number represents how much cones to sell before start of loop
// inside of loop random number between 1 - 5
    // how many cones are being bought by her clients
    

    var allCones = Math.floor( Math.random() * 50) + 50;
    var wantedCones = Math.floor( Math.random() * 6) +1;

    function iceCreamSold() {
        do {
            if (wantedCones >= allCones) {
                console.log(`I'm sorry, you wanted ${wantedCones}, but we only have ${allCones}`)
                continue;
            }
                console.log(`Here is your Ice Cream Cone ${wantedCones}. Enjoy!`)
                allCones -= wantedCones;
                console.log(`We have ${allCones} remaining`);
            } while (allCones > 0)
    }
    iceCreamSold();

})();