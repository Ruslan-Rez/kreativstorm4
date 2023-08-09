const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operand");
const clear = document.querySelector(".clear");

let displayValue = null;
let number1 = null;
let number2 = null;
let operator = null;

// listen for operators being applied
operators.forEach((operatorInput) => {
  operatorInput.addEventListener("click", (e) => {

    // If the operator is not equals
    if (e.target.value !== "=") {
      number1 = parseFloat(displayValue)
      console.log("Number1 is:" + number1);
      
      // operator is operator pressed
      operator = e.target.value;
      console.log("OPerator value is:" + operator);

      // clear display
      display.value = "";
      displayValue = display.value
    } else {
      displayValue = display.value
      number2 = parseFloat(displayValue)
      console.log("num2:" + number2);  
    }
  });
});

document.getElementById("equal").addEventListener('click', calculate)
function calculate(){
  let solution = operate(number1,number2, operator);
  console.log("Current display value" + solution);
  display.value = solution;
}

function change_send(value) {
  //keyboard
  document.getElementById("display").value = value;
  displayValue = document.getElementById("display").value;
  console.log("Current display value" + displayValue);
}

function appendToDisplay(value) {
  //mouse
  document.getElementById("display").value += value;
  displayValue = document.getElementById("display").value;
  console.log("Current display value" + displayValue);
}

// clear.addEventListener("click", clearDisplay)
function clearDisplay() {
  document.getElementById("display").value = "";
  displayValue = null;
  number1 = null;
  number2 = null;
  operator = null;
}

function backSpace() {
  if (displayValue) {
    displayValue = displayValue.substring(0, displayValue.length - 1);
    document.getElementById("display").value = displayValue;
    console.log("Current display value" + displayValue);
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
    case '+':
      return add(number1, number2);
    case '-':
      return subtract(number1, number2);
    case '*':
      return multiply(number1, number2);
    case '/':
      if (number2 === 0) {
        return "Why...";
      } else return divide(number1, number2);
  }
}
