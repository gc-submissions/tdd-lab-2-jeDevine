const getCoins = (cents) => {
    let change = [];
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    while (cents > 25) {
        cents = cents - 25;
        quarters++
    }
    while (cents<25 && cents >10){
        cents = cents - 10;
        dimes++
    }
    while (cents<10 && cents > 5){
        cents = cents - 5;
        nickels++
    }
    while(cents<5){
        pennies = cents;
    }
    change.push({Quaters: quarters, Dimes: dimes, Nickels: nickels, Pennies: pennies});
    console.log(change);
}

getCoins(58)