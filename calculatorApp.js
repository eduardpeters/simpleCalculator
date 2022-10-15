console.log("JS Loaded!");

function handleClick(button) {
    const operationField = document.getElementById("current-operation");
    operationField.innerHTML = operationField.innerHTML + button;
}
/* Must implement a good parser, to avoid using eval() !!
* Currently only handles a single operator and the first number cannot be negative.
* It also does not handle floats at input (which can result from operations).
*/
function handleResult() {
    const operationField = document.getElementById("current-operation");
    const currentOperation = operationField.innerHTML;
    if (validateOperation(currentOperation)){
        let result = 0;
        const numbers = currentOperation.split(/[\+\-\*\/]/).map(e => parseInt(e));
        const operators = currentOperation.split(/[\d]*/).filter(e => e !== "");
        console.log(numbers);
        console.log(operators);
        operationField.innerHTML = singleOperation(numbers[0], numbers[1], operators[0]);
    }
    else{
        alert("Not a valid operation");
    }
}

function validateOperation(str) {
    if (str[0] === "*" || str[0] === "/")
        return (false);
    let operatorCount = 0;
    for (let i = 0; i < str.length; i++){
        if (!isDigit(str[i]))
            operatorCount++;
    }
    return (operatorCount > 1 ? false : true);
}

function singleOperation(a, b, op) {
    let result;
    switch (op) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            break;
    }
    return (result);
}

function isDigit(c) {
    return (c >= "0" && c <= "9");
}

function handleClear() {
    document.getElementById("current-operation").innerHTML = "";
}