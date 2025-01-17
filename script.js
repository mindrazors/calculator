let expression = {
    firstOperand: '',
    secondOperand: '',
    operator: '',
    firstOperandHasDecimal: false,
    secondOperandHasDecimal: false,
};
expression;

//Contains reference for display div
const display = document.querySelector('#display');

function add(num1, num2) {
    return +num1 + +num2;
}

function subtract(num1, num2) {
    return +num1 - +num2;
}

function multiply(num1, num2) {
    return +num1 * +num2;
}

function divide(num1, num2) {
    return +num1 / +num2;
}

function operate(exp) {
    switch (exp.operator) {
        case '+':
            return add(exp.firstOperand, exp.secondOperand);
            break;
        case '-':
            return subtract(exp.firstOperand, exp.secondOperand);
            break;
        case '*':
            return multiply(exp.firstOperand, exp.secondOperand);
            break;
        case '/':
            return divide(exp.firstOperand, exp.secondOperand);
            break;
        default:
            return 'ERROR';
    }
}

function getOperand() {
    expression;
    if (expression.operator == '') {
        expression.firstOperand += this.textContent;
    } else {
        expression.secondOperand += this.textContent;
    }
    updateDisplay();
}
function getOperator() {
    expression;
    // if there is a first operand present, and no second operand present, then assign an operator value to expression.operator
    ((expression.firstOperand != '') && (expression.secondOperand == '')) ? expression.operator = this.textContent : expression.operator = expression.operator;
    updateDisplay();
}
function addDecimalPlace() {
    expression;
    if (expression.operator == '') {
        if (expression.firstOperandHasDecimal == false) {
            expression.firstOperand += '.';
            expression.firstOperandHasDecimal = true;
        } else {
            return;
        }
    } else {
        if (expression.secondOperandHasDecimal == false) {
            expression.secondOperand += '.';
            expression.secondOperandHasDecimal = true;
        } else {
            return;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    expression;
    display.textContent = `${expression.firstOperand} ${expression.operator} ${expression.secondOperand}`;
}
function clear() {
    expression = {
        firstOperand: '',
        secondOperand: '',
        operator: '',
        firstOperandHasDecimal: false,
        secondOperandHasDecimal: false,
    };
    updateDisplay();
}

function attemptCalculation() {
    if (expression.firstOperand && expression.operator && expression.secondOperand) {
        let solution = `${operate(expression)}`;
        if (Array.from(solution).includes('.')) {
            solution = Number(solution).toFixed(5);
            let solutionArray = Array.from(solution);
            for (let i = solutionArray.length - 1; i >= 0; i--) {
                if (+solutionArray[i] > 0) {
                    break;
                } else {
                    solutionArray.splice(i);
                }
            }
            solution = solutionArray.toString().replace(/,/g, '');
        }
        display.textContent = solution;
        expression = {
            firstOperand: '',
            secondOperand: '',
            operator: '',
            firstOperandHasDecimal: false,
            secondOperandHasDecimal: false,
        };
        expression.firstOperand = solution;
        if (Array.from(expression.firstOperand).includes('.')) {
            expression.firstOperandHasDecimal = true;
        } else {
            return;
        }
    } else {
        return;
    }
}

//Contains references for ALL buttons
const buttons = Array.from(document.querySelectorAll('button'));

//Adds event listeners for ALL buttons
for (const button of buttons) {
    if (isFinite(button.textContent)) {
        button.addEventListener('click', getOperand);
    } else if (button.textContent == 'Clear') {
        button.addEventListener('click', clear);
    } else if (button.textContent == '=') {
        button.addEventListener('click', attemptCalculation)
    } else if (button.textContent == '.') {
        button.addEventListener('click', addDecimalPlace);
    } else {
        button.addEventListener('click', getOperator);
    }
}