"use strict";

/**
 * *------ Steps -----
 * 1. Récupérer la valeur au clic sur l'un des boutons
 * 2. Faire apparaitre le contenetextContent)ur thanks__wrapper et disparaitre le contenur rating__wrapper
 * 3. Afficher la valeur récupérée dans le span rate__area
 */

let rates = document.querySelectorAll(".feedback__content");
console.log(rates);
let rate;
rates.forEach((r) => r.addEventListener("click", getValue));

function getValue(b) {
  console.log(b);
  console.log(b.target);
  /*  let result = e.currentTarget.textContent.trim();
  return result;
 */
  /*   console.log(this.textContent.trim());
  return this.textContent.trim(); */
}

rate = getValue();
console.log("Test", rate);
