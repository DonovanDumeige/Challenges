"use strict";

/**
 * *------ Steps -----
 * 1. Get a value from a rate by a click.
 * 2. Apply style from .isActive for the chosen rate.
 * 3. Make disapear .rating__wrapper and show thanks__wrapper
 * 4. Show the rate on the area .rate__area
 */

/* 
! I forgot something crucial with forEach. This loop can't return a value and use a callback function as a parameter.
! If I try to return something, the result will be undefined.
! All the execution has to be inside the forEach to work well.
 */
const rates = document.querySelectorAll(".feedback__content");
const rating_wrapper = document.querySelector(".rating__wrapper");
const thanks_wrapper = document.querySelector(".thanks__wrapper");
const btn = document.querySelector(".btn");
const rate_area = document.querySelector("#rate__area");

let rate = null;
rates.forEach((r) =>
  r.addEventListener("click", (e) => {
    // checked and unchecked behaviour
    const active = document.querySelector(".isActive");
    if (active) {
      active.classList.remove("isActive");
    }
    const rateContainer = e.target;
    rateContainer.classList.add("isActive");
    rate = e.target.textContent;
  })
);

btn.addEventListener("click", () => {
  if (rate) {
    rate_area.innerText = rate;
    rating_wrapper.classList.add("isHidden");
    thanks_wrapper.classList.remove("isHidden");
  }
});
