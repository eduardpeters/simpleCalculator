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
    const previousField = document.getElementById("previous-input");
    const operationField = document.getElementById("current-input");
    if (previousField.value && operationField.innerHTML === ""){
        previousField.style.display = "none";
    }
    if (operationField.innerHTML === "0")
        operationField.innerHTML = button;
    else if (operationField.innerHTML === "-0")
        operationField.innerHTML = "-" + button;
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
        if (operationField.innerHTML === "")
            operationField.innerHTML = "0.";
        else if (operationField.innerHTML === "-")
            operationField.innerHTML = "-0."
        else
            operationField.innerHTML = operationField.innerHTML + ".";
    }
}

function handleSignClick() {
    const previousField = document.getElementById("previous-input");
    const operationField = document.getElementById("current-input");
    if (operationField.innerHTML[0] === "-")
        operationField.innerHTML = operationField.innerHTML.substring(1,);
    else {
        if (previousField.value && operationField.innerHTML === "")
            previousField.style.display = "none";
        operationField.innerHTML = "-" + operationField.innerHTML;
    }
}

function handleOperationClick(button) {
    const previousField = document.getElementById("previous-input");
    const operationField = document.getElementById("current-input");
    if (operationField.innerHTML === "" || operationField.innerHTML === "-"){
        if (previousField.value)
            previousField.value = previousField.innerHTML + button;
        else
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