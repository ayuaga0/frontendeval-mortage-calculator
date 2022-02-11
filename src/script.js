/*
 * https://frontendeval.com/questions/mortgage-calculator
 *
 * Create a calculator that works out your monthly mortgage payment
 */

let calculateButton = document.getElementById("calculate");
let principal = document.querySelector("[data-input='Principal']");
let rate = document.querySelector("[data-input='Rate']");
let length = document.querySelector("[data-input='lengthOfLoan']");

let outputSection = document.getElementById("calculated-payment");

calculateButton.addEventListener("click", function () {
  debugger;
  let p = parseInt(principal.value);
  let rY = parseInt(rate.value);
  let len = parseInt(length.value);
  if (isNaN(p) || isNaN(rY) || isNaN(len)) {
    if (isNaN(p)) {
      outputSection.innerHTML = "Principal Invalid";
    }
    if (isNaN(rY)) {
      outputSection.innerHTML += "\nRate Invalid";
    }
    if (isNaN(len)) {
      outputSection.innerHTML += "\nLength of Loan Invalid";
    }
  } else {
    let r = rY / 1200;
    let n = len * 12;

    let m = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);

    outputSection.innerHTML = `Your monthly mortage payment will be $${m.toFixed(
    0)
    }`;
  }
});