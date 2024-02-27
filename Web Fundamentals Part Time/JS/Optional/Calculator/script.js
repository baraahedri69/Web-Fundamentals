var displayDiv = document.querySelector("#display");


var currentOperand = "";
var firstOperand = null;
var operator = null;
var waitingForSecondOperand = false;


function press(number) {
    if (waitingForSecondOperand) {
        currentOperand = String(number);
        waitingForSecondOperand = false;
    } else {
        currentOperand += String(number);
    }
    updateDisplay();
}


function setOP(op) {
    if (currentOperand !== "") {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentOperand);
        } else if (operator !== null) {
            firstOperand = calculateResult();
        }
        operator = op;
        currentOperand = "";
        waitingForSecondOperand = true;
        updateDisplay();
    }
}


function calculate() {
    if (operator !== null && currentOperand !== "") {
        var result = calculateResult();
        displayResult(result);
        firstOperand = result;
        operator = null;
        currentOperand = "";
        waitingForSecondOperand = true;
    }
}


function calculateResult() {
    var secondOperand = parseFloat(currentOperand);
    var result;
    switch (operator) {
        case "+":
            result = firstOperand + secondOperand;
            break;
        case "-":
            result = firstOperand - secondOperand;
            break;
        case "*":
            result = firstOperand * secondOperand;
            break;
        case "/":
            result = firstOperand / secondOperand;
            break;
        default:
            return NaN;
    }
    return result;
}


function clr() {
    currentOperand = "";
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function updateDisplay() {
    displayDiv.innerText = currentOperand === "" ? "0" : currentOperand;
}


function displayResult(result) {
    displayDiv.innerText = result;
}