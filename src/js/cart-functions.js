const calculateChange = (total, payment) => {
    return payment-total;
}

const isSufficientPayment = (total, payment) => {
    if(payment >= total) {
        return true;
    } else {
        return false;
    }
}


let objectList2 = [
    {name: "Jelly", price:3.50},
    {name: "Borito", price:12.99},
    {name: "Potato", price: 0.03}
  ]

const calculateTotal = (itemsArray) => {
    let total = 0;
    for(let i=0; i<itemsArray.length; i++) {
       total = total + itemsArray[i].price;
    }
    // total = total.toFixed(2);
    return total;
}

console.log(calculateTotal(objectList2))


let object1 = [{Name: "Beans", Price: 3}];

const addItem = (itemsArray, name, price) => {
    let newArray = {Name: name, Price: price};
    itemsArray.push(newArray);
    return itemsArray;

}

let object2 = [
    {Name: "Beans", Price: 3,},
    {Name: "Sugar", Price: 2,}
]

// removeItem from Array
function removeItem(itemsArray, index) {
    itemsArray.splice(index, 1);
}

















const myRemoveItem = (itemsArray, index) => {
    itemsArray.splice(index, 1);
    return itemsArray;                                                                
}



module.exports = {
    calculateChange:calculateChange,
    isSufficientPayment:isSufficientPayment,
    calculateTotal:calculateTotal,
    addItem:addItem,
    myRemoveItem:myRemoveItem,
    removeItem:removeItem,
}