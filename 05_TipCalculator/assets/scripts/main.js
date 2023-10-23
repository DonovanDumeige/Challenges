"use strict";

let bill, tips, people;
let amountTip = 0;
let totalPrice = 0;

bill = getBill(130);
tips = chooseTips(25);
people = getPeople(4);

function cleanPrice(value) {
  return value.toFixed(2);
}
function getBill(price) {
  bill = price;
  return bill;
}

/**
 * choose an amount for tips an calculate the coefficient
 * @param {number} number to 5 at 50 or custom
 * @returns {number}
 */
function chooseTips(value) {
  tips = value / 100 + 1;
  console.log("Percent of tips = ", tips);
  return tips;
}

function getPeople(number) {
  people = number;
  return people;
}

function calculateTips(bill, tips) {
  return bill * tips;
}

function calculateAmountTips() {
  amountTip = (calculateTips(bill, tips) - bill) / people;
  return cleanPrice(amountTip);
}

function calculateTotalPrice() {
  totalPrice = calculateTips(bill, tips) / people;
  return cleanPrice(totalPrice);
}

function init() {
  console.log("Amount of tips per person = " + calculateAmountTips() + "$");
  console.log("Total per person = " + calculateTotalPrice() + "$");
}
init();
