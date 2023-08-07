let displayValue;

function appendToDisplay(value) {
  document.getElementById("display").value += value;
  displayValue = document.getElementById("display").value;
  console.log("The display value is " + displayValue);
}

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
      }else return divide(number1,number2)
  }
}
