const answers = require("../src/js/cart-functions.js")

describe("calculateChange", () => {
  test("6-5=1", function() {
    expect(answers.calculateChange(5, 6)).toEqual(1)
  });
  test("15-10=5", function() {
    expect(answers.calculateChange(10, 15)).toEqual(5)
  });
});


describe("isSufficientPayment", () => {
  test("sufficient1", function() {
    expect(answers.isSufficientPayment(5, 6)).toEqual(true)
  });
  test("sufficient2", function() {
    expect(answers.isSufficientPayment(10, 7)).toEqual(false)
  });
  test("sufficient3", function() {
    expect(answers.isSufficientPayment(3, 3)).toEqual(true)
  });
  test("sufficient4", function() {
    expect(answers.isSufficientPayment(100, 99)).toEqual(false)
  });
});


let objectList1 = [{name: "Jelly", price: 3.50}]
let objectList2 = [
  {name: "Jelly", price:3.50},
  {name: "Borito", price:12.99},
  {name: "Potato", price: 0.03}
]
let objectList3 = [{}];
describe("calculateTotal", () => {
  test("calc total1", function() {
    expect(answers.calculateTotal(objectList1)).toBeCloseTo(3.50)
  });
  test("calc total2", function() {
    expect(answers.calculateTotal(objectList2)).toBeCloseTo(16.52)
  });
  test("calc total3", function() {
    expect(answers.calculateTotal(objectList3)).toBeCloseTo(0)
  });
});



let object1 = [{Name: "Beans", Price: 3}]
let object2 = [
  {Name: "Beans", Price: 3,},
  {Name: "Sugar", Price: 2,}
]
let object3 = [
  {Name: "Beans", Price: 3,},
  {Name: "Potato", Price: 4,}
];
let object4 = [{Name: "Beans", Price: 3}]
let object5 = [
  {Name: "Beans", Price: 3,},
  {Name: "Sugar", Price: 2,}
]
describe("addItem", () => {
  test("add object1", function() {
    expect(answers.addItem(object1, "Sugar", 2)).toEqual(object2)
  });
  test("add object3", function() {
    expect(answers.addItem(object4, "Potato", 4)).toEqual(object3)
  });
});

describe("removeItem with class", () => {
  test("remove from index 0", function() {
    let array = [
      {Name: "Beans", Price: 3,},
      {Name: "Sugar", Price: 2,},
      {Name: "taco", Price: 4,}
    ];
    answers.removeItem(array, 0)
    expect(array).toEqual([
      {Name: "Sugar", Price: 2,},
      {Name: "taco", Price: 4,}
  ])
  })
});















describe("removeItem", () => {
  test("remove object at index 0", function() {
    expect(answers.myRemoveItem(object2, 0)).toEqual([{Name: "Sugar", Price: 2,}])
  });
  test("remove object at index 1", function() {
    expect(answers.myRemoveItem(object5, 1)).toEqual([{Name: "Beans", Price: 3,}])
  });
});