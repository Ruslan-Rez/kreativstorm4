const input = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operand");
const equal = document.querySelector(".equals");
const clear = document.querySelector(".clear");
let displayValue = null;
let number1 = null;
let number2 = null;
let operator = null;

// listen for all numbers being input
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (operator === null) {
      // Read first number if no operator set yet
      number1 += e.target.innerText;
    } else {
      // Read second number
      number2 += parseFloat(e.target.innerText);
    }
  });
});

// listen for operators being applied
operators.forEach((operatorInput) => {
  operatorInput.addEventListener("click", (e) => {
    // If the operator is not equals
    if (e.target.value !== "=") {
      let n1 = parseInt(displayValue.length - 1);
      number1 = parseFloat(displayValue.slice(0, n1));
      console.log("Number1 is:" + number1);
      operator = e.target.value;
      console.log("Operator value is:" + operator);
    } else if (e.target.value === "=") {
      console.log("num2:" + number2);  
    }
  });
});

function calculate(){
  answer = operate(number1,number2, operator);
  document.getElementById("display").value = answer;
  displayValue = document.getElementById("display").answer
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
