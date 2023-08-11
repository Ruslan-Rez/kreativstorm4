const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operand");
const clear = document.querySelector(".clear");
const equal = document.querySelector("#equal");

let displayValue = "";
let number1 = null;
let number2 = null;
let operator = null;
let hasCalculated = false;

numbers.forEach((numberInput) => {
  numberInput.addEventListener("click", (e) => {
    appendToDisplay(e.target.value);
  });
});

operators.forEach((operatorInput) => {
  operatorInput.addEventListener("click", (e) => {
    if (e.target.value !== "=") {
      if (number1 === null) {
        number1 = parseFloat(displayValue);
      } else if (operator !== null && displayValue !== "") {
        number2 = parseFloat(displayValue);
        number1 = operate(number1, number2, operator);
        display.value = number1;
        number2 = null;
      }
      operator = e.target.value;
      displayValue = "";
      hasCalculated = false;
      enableDecimalButton(); // Re-enable the decimal button
      // Clear the display when an operator is clicked
      display.value = "";
      displayValue = "";
    }
  });
});

// Listen for equal button click
function calculate() {
  if (number1 !== null && operator !== null) {
    number2 = parseFloat(displayValue);
    const result = operate(number1, number2, operator);
    display.value = result;
    number1 = result;
    number2 = null;
    operator = null;
    displayValue = "";
  }
}

function change_send(value) {
  //keyboard/mouse
  display.value = value;
  displayValue = value;
  console.log("Current display value: " + displayValue);
}

function appendToDisplay(value) {
  //mouse
  // Check if the value is a decimal and if there's already a decimal in the display
  if (value === "." && displayValue.includes(".")) {
    return; // Don't allow multiple decimals
  }
  display.value += value;
  displayValue = display.value;
  // Disable the decimal button if there's already a decimal in the display
  if (value === ".") {
    document.querySelector(".decimal").disabled = true;
  }
  console.log("Current display value: " + displayValue);
}
function enableDecimalButton() {
  document.querySelector(".decimal").disabled = false;
}

// clear.addEventListener("click", clearDisplay)
function clearDisplay() {
  // document.getElementById("display").value = "";
  display.value = "";
  displayValue = "";
  // displayValue = null;
  number1 = null;
  number2 = null;
  operator = null;
}

function backSpace() {
  if (displayValue) {
    displayValue = displayValue.substring(0, displayValue.length - 1);
    document.getElementById("display").value = displayValue;
    console.log("Current display value: " + displayValue);
  }
}

function add(number1, number2) {
  let add = number1 + number2;
  return add;
}
function subtract(number1, number2) {
  let sub = number1 - number2;
  return sub;
}
function multiply(number1, number2) {
  let mul = number1 * number2;
  return mul;
}
function divide(number1, number2) {
  let div = number1 / number2;
  return div;
}

function operate(number1, number2, operator) {
  switch (operator) {
    case "+":
      return add(number1, number2);
    case "-":
      return subtract(number1, number2);
    case "*":
      return multiply(number1, number2);
    case "/":
      if (number2 === 0) {
        return "Why ...";
      }
      return divide(number1, number2);
    default:
      return number1; // Default case for unsupported operators
  }
}
