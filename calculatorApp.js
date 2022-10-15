console.log("JS Loaded!");

function handleClick(button) {
    const operationField = document.getElementById("current-operation");
    operationField.innerHTML = operationField.innerHTML + button;
}
// Must implement a parser!!
function handleResult() {
    const operationField = document.getElementById("current-operation");
    const currentOperation = operationField.innerHTML;
    if (validateOperation(currentOperation)){
        alert("A Valid operation");
    }
    else{
        alert("Not a valid operation");
    }
}

function validateOperation(str) {
    let operators = 0;
    for (let i = 0; i < str.length; i++){
        if (!isDigit(str[i]))
            operators++;
    }
    return (operators > 1 ? false : true);
}

function isDigit(c) {
    return (c >= "0" && c <= "9");
}

function handleClear() {
    document.getElementById("current-operation").innerHTML = "";
}