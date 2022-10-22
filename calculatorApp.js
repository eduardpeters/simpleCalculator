console.log("JS Loaded!");
window.addEventListener("keydown", handleKeys);

function handleKeys(event) {
    if (event.key >= "0" && event.key <= "9")
        handleNumberClick(event.key);
    else if (event.key === ".")
        handleDecimalClick();
    else if (event.key === "Enter")
        handleResult();
    else if (event.key === "c")
        handleClear();
    else if ("+-*/".includes(event.key))
        handleOperationClick(event.key);
}

function handleNumberClick(button) {
    const operationField = document.getElementById("current-input");
    if (operationField.innerHTML === "0")
        operationField.innerHTML = button;
    else if (operationField.innerHTML === "-0")
        operationField.innerHTML = "-" + button;
    else
        operationField.innerHTML = operationField.innerHTML + button;
}

function handleDecimalClick() {
    const operationField = document.getElementById("current-input");
    if (operationField.innerHTML.includes("."))
        alert("A decimal separator has already been added");
    else {
        if (operationField.innerHTML === "")
            operationField.innerHTML = "0.";
        else if (operationField.innerHTML === "-")
            operationField.innerHTML = "-0."
        else
            operationField.innerHTML = operationField.innerHTML + ".";
    }
}

function handleSignClick() {
    const operationField = document.getElementById("current-input");
    if (operationField.innerHTML[0] === "-")
        operationField.innerHTML = operationField.innerHTML.substring(1,);
    else {
        operationField.innerHTML = "-" + operationField.innerHTML;
    }
}

function handleOperationClick(button) {
    const previousField = document.getElementById("previous-input");
    const operationField = document.getElementById("current-input");
    if (operationField.innerHTML === "" || operationField.innerHTML === "-"){
        if (previousField.innerHTML)
            previousField.innerHTML = previousField.value + button;
        else
            alert("Enter a number before an operator");
    }
    else {
        if (previousField.innerHTML)
            handleResult();
        previousField.value = operationField.innerHTML;
        previousField.innerHTML = previousField.value + button;
        operationField.innerHTML = "";
    }
}

function handleResult() {
    const previousField = document.getElementById("previous-input");
    const operationField = document.getElementById("current-input");
    if (previousField.innerHTML && operationField.innerHTML){
        const firstNumber = parseFloat(previousField.value);
        const secondNumber = parseFloat(operationField.innerHTML);
        const operator = previousField.innerHTML[previousField.innerHTML.length - 1];
        previousField.innerHTML = "";
        previousField.value = "";
        operationField.innerHTML = singleOperation(firstNumber, secondNumber, operator);
    }
    else
        alert("No operation to perform");
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