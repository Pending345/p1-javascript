function add() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num1 === 0 || num2 === 0) {
        document.getElementById("result").textContent = "het getal is te laag";
    }
    else {
        let result = num1 + num2;
        document.getElementById("result").textContent = "Resultaat: " + result;
    }
}

function subtract() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num1 === 0 || num2 === 0) {
        document.getElementById("result").textContent = "het getal is te laag";
    }
    else {
        let result = num1 - num2;
        document.getElementById("result").textContent = "Resultaat: " + result;
    }
}

function multiply() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num1 === 0 || num2 === 0) {
        document.getElementById("result").textContent = "het getal is te laag";
    } 
    else {
        let result = num1 * num2;
        document.getElementById("result").textContent = "Resultaat: " + result;
    }   
}

function divide() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num1 === 0 || num2 === 0) {
        document.getElementById("result").textContent = "het getal is te laag";
    } else {
        let result = num1 / num2;
        document.getElementById("result").textContent = "Resultaat: " + result;
    }
}