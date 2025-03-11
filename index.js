const display = document.getElementById('calculator__display');


function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() { 
    try {
        let result = eval(display.value);
        display.value = Number(result.toFixed(10));  
    } catch (error) {
        display.value = "Error";  
    }
}

function deleteLast() {
    display.value = display.value.slice(0, -1); 
}