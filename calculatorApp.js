console.log("JS Loaded!");

function handleNumberClick(button) {
    const previousField = document.getElementById("previous-input");
    const operationField = document.getElementById("current-input");
    if (previousField.value && operationField.innerHTML === ""){
        previousField.style.display = "none";
    }
    if (operationField.innerHTML === "0")
        operationField.innerHTML = button;
    else
        operationField.innerHTML = operationField.innerHTML + button;
}

function handleDecimalClick() {
    const previousField = document.getElementById("previous-input");
    const operationField = document.getElementById("current-input");
    if (operationField.innerHTML.includes("."))
        alert("A decimal separator has already been added");
    else {
        if (previousField.value && operationField.innerHTML === "")
            previousField.style.display = "none";
        operationField.innerHTML = operationField.innerHTML === "" ? "0." : operationField.innerHTML + ".";
    }
}

function handleOperationClick(button) {
    const previousField = document.getElementById("previous-input");
    const operationField = document.getElementById("current-input");
    if (operationField.innerHTML === ""){
        alert("Enter a number before an operator");
    }
    else {
        if (previousField.value)
            handleResult();
        previousField.value = operationField.innerHTML + button;
        previousField.innerHTML = previousField.value.substring(0, previousField.value.length - 1);
        previousField.style.display = "block";
        operationField.innerHTML = "";
    }
}

function handleResult() {
    const previousField = document.getElementById("previous-input");
    const operationField = document.getElementById("current-input");
    if (previousField.value && operationField.innerHTML){
        const firstNumber = parseFloat(previousField.innerHTML);
        const secondNumber = parseFloat(operationField.innerHTML);
        const operator = previousField.value[previousField.value.length - 1];
        previousField.innerHTML = "";
        previousField.value = "";
        operationField.innerHTML = singleOperation(firstNumber, secondNumber, operator);
    }
    else{
        alert("No operation to perform");
    }
}

function singleOperation(a, b, op) {
    switch (op) {
        case "+":
            return (a + b);
        case "-":
            return (a - b);
        case "*":
            return (a * b);
        case "/":
            return (a / b);
        default:
            break;
    }
}

function handleClear() {
    const previousField = document.getElementById("previous-input");
    const operationField = document.getElementById("current-input");
    previousField.innerHTML = "";
    previousField.value = "";
    operationField.innerHTML = "";
}