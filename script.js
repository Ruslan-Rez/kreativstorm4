const input = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operand");
const equal = document.querySelector(".equals");
const clear = document.querySelector(".clear");


let number1  = " ";
let number2 = " ";
let operator =" ";

// listen for numbers
numbers.forEach(number => {
  number.addEventListener("click", e => {
      if (operator === " ") { 
        // Read first number if no operator set yet
        number1 = parseInt(e.target.value);
      } else { 
        // Read second number
          number2 = parseInt(e.target.value);
      }
  });
});

// listen for operators
operators.forEach(operatorInput => {
  operatorInput.addEventListener("click", e => {
    // If the operator is not equals
      if (e.target.value !== "=") { 
          operator = e.target.value;
          console.log("number1 from op:" +number1); 
          console.log("operator" + operator); 
      } else { 
          console.log(number2); 
          // If equals button clicked
          operate()
      }})})
  

let displayValue;

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

  console.log("Current display value" + displayValue)
  console.log("Number1 is:" +number1)

  console.log("Current display value" + displayValue);

}


// clear.addEventListener("click", clearDisplay)
function clearDisplay() {
  document.getElementById("display").value = "";
}

function add(number1, number2){
  let add = number1 + number2;
  return add;
}
function subtract(number1, number2){
  let sub = number1 - number2;
  return sub;
}
function multiply(number1,number2){
  let mul = number1 * number2;
  return mul
}
function divide(number1, number2){
  let div = number1 / number2;
  return div
}

function operate(number1, number2, operator){
  switch (operator){
    case "+":
      return add(number1,number2)
    case "-":
      return subtract(number1,number2)
    case "*":
      return multiply(number1,number2)
    case "/":
      if (number2 === 0){
        return "Why..."
      }else return divide(number1, number2)
  }
}