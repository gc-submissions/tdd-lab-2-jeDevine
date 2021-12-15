const formatCurrency = (amount) => {
    let dollars = amount.toFixed(2);
    if (amount>=0){
        amount = `$${dollars}`
    } else {
        dollars = dollars*-1;
        dollars = dollars.toFixed(2)
        amount =  `-$${dollars}`;
    }
    return amount;
}

const getCoins = (cents) => {
    let change = [];
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    if (cents> 25){
        remaining1 = cents - 25
    }
    if (remaining1>25){
        remaining2 = cents - 25
    }
}

module.exports = {
    formatCurrency: formatCurrency,
}