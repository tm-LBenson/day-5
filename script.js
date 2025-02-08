"use strict";

const countDisplay = document.getElementById("count");
let count = 0;
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

increment.addEventListener("click", () => {
  count++;
  countDisplay.innerText = count;
});

decrement.addEventListener("click", () => {
  count--;
  countDisplay.innerText = count;
});
