
function toggleInputs() {
    const operator = document.getElementById("operator").value;
    const normalLayout = document.getElementById("normal-layout");
    const trigLayout = document.getElementById("trig-layout");
    const num2Input = document.getElementById("num2");

    if (["sin", "cos", "tan"].includes(operator)) {
        normalLayout.style.display = "none";
        trigLayout.style.display = "flex";
        document.getElementById("operator-trig").value = operator;
        document.getElementById("num1-trig").value = document.getElementById("num1").value;
    } else {
        normalLayout.style.display = "flex";
        trigLayout.style.display = "none";
        num2Input.style.display = operator === "!" ? "none" : "inline-block";
    }
}

function syncOperators() {
    const trigOperator = document.getElementById("operator-trig").value;
    document.getElementById("operator").value = trigOperator;
    toggleInputs();
}

function factorial(n) {
    if (n < 0) return "Undefined (negative)";
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function calculate() {
    let res = 0;
    const operatorSelect = document.getElementById("normal-layout").style.display !== "none" 
        ? document.getElementById("operator") 
        : document.getElementById("operator-trig");
    const operator = operatorSelect.value;
    
    const num1Input = document.getElementById("normal-layout").style.display !== "none" 
        ? document.getElementById("num1") 
        : document.getElementById("num1-trig");
    const num1 = parseFloat(num1Input.value);
    
    if (operator === "!") {
        res = factorial(num1);
    } 
    else if (["sin", "cos", "tan"].includes(operator)) {
        const radians = num1 * Math.PI / 180;
        switch(operator) {
            case "sin": res = Math.sin(radians); break;
            case "cos": res = Math.cos(radians); break;
            case "tan": res = Math.tan(radians); break;
        }
        res = Math.round(res * 10000) / 10000;
    }
    else {
        const num2 = parseFloat(document.getElementById("num2").value);
        switch(operator) {
            case "+": res = num1 + num2; break;
            case "-": res = num1 - num2; break;
            case "x": res = num1 * num2; break;
            case "/": 
                res = num2 === 0 ? "Tanımsız (0 ile bölme işlemi)" : num1 / num2; 
                break;
            case "^": res = Math.pow(num1, num2); break;
            default: res = "Geçersiz işlem";
        }
    }
    
    document.getElementById("result").textContent = "Sonuç: " + res;
}

window.onload = function() {
    toggleInputs();
};