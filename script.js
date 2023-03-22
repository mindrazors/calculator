function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1/num2;
}

let firstNum;
let secondNum;
let operator;

function operate(firstNum, secondNum, operator) {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum);
            break;
        case '-':
            return subtract(firstNum, secondNum);
            break;
        case '*':
            return multiply(firstNum, secondNum);
            break;
        case '/':
            return divide(firstNum, secondNum);
            break;
        default:
            return 'ERROR';
    }
}

//Contains references for ALL buttons
const buttons = Array.from(document.querySelectorAll('button'));

//Contains references for add, subtract, multiply, divide, decimal, and equals buttons ONLY
const operators = Array.from(document.querySelectorAll('.operator'));

//Contains references for number buttons ONLY
const operands = buttons.filter(element => {
    return !(operators.includes(element));
});
for (const operand of operands) {
    operand.addEventListener('click', function updateDisplay() {
        let currentDisplayValue = +this.innerHTML;
        display.textContent = currentDisplayValue;
    });
}

//Contains reference for display div
const display = document.querySelector('#display');