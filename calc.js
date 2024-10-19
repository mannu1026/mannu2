let solution = document.getElementById('solution');
let currentInput = '';
let operation = '';
let firstOperand = null;

function appendNumber(number) {
        currentInput += number;
        updateDisplay(currentInput);
    }

function getHistory(){
    return document.getElementById("history-value").innerText;
}

function setOperation(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (operation) {
        firstOperand = calculate(firstOperand, parseFloat(currentInput), operation);
    }

    operation = op;
    currentInput = '';
}

function calculateResult() {
    if (firstOperand === null || currentInput === '' || operation === '') return;
    const result = calculate(firstOperand, parseFloat(currentInput), operation);
    updateDisplay(result);
    currentInput = '';
    firstOperand = null;
    operation = '';
}

function clearSolution() {
    currentInput = '';
    firstOperand = null;
    operation = '';
    updateDisplay('0');
}

function calculate(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error';
        default:
            return b;
    }
}

function updateDisplay(value) {
    const solutionInput = document.getElementById('solution');
    solutionInput.value = value;
}
if(output!="" || history!=""){
    output= output==""?output:reverseNumberFormat(output);
    history=history+output;
    if(this.id=="="){
        var result=eval(history);
        printOutput(result);
        printHistory("");
    }
    else{
        history=history+this.id;
        printHistory(history);
        printOutput("");
    }
}
