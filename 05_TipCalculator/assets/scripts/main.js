"use strict";

let tips = document.querySelectorAll(".field__input--darkcyan");
let isActive = false;
console.log(tips);
let bill, people;
let amountTip = 0;
let totalPrice = 0;

bill = getBill(130);

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
 * @param {PointerEvent} e
 * @param {number} value to 5 at 50 or customkf
 * @returns {number}
 */
function chooseTips(e, value) {
  e.preventDefault();
  console.log(e.currentTarget);
  if (isActive) {
  }
  // tips = value / 100 + 1;
  // console.log("Percent of tips = ", tips);
  // return tips;
}

tips.forEach((tip) => tip.addEventListener("click", chooseTips));
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
