let answers = require("../src/js/money-functions.js");

describe("formatCurrency", () => {
  test("0 to $0.00", function() {
    expect(answers.formatCurrency(0)).toEqual("$0.00");
  });
  test("1 to $1.00", function() {
    expect(answers.formatCurrency(1)).toEqual("$1.00");
  });
  test("1.5 to $1.50", function() {
    expect(answers.formatCurrency(1.5)).toEqual("$1.50");
  });
  test("0.01 to $0.01", function() {
    expect(answers.formatCurrency(0.01)).toEqual("$0.01");
  });
  test("527.6789 to $527.68", function() {
    expect(answers.formatCurrency(527.6789)).toEqual("$527.68");
  });
  test("-1 to -$1.00", function() {
    expect(answers.formatCurrency(-1)).toEqual("-$1.00");
  });
});

describe("getCoins", () => {
  test.todo("add getCoins tests here");
});