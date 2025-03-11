const display = document.getElementById('calculator__display');
let cursorPosition = 0;
let isResultDisplayed = false; 

function updateDisplay() {
    if (isResultDisplayed) 
        return; 
    let text = display.innerText.replace('|', ''); 
    let start = text.substring(0, cursorPosition);
    let end = text.substring(cursorPosition);
    display.innerText = start + '|' + end; 
}

function appendToDisplay(input) {
    if (isResultDisplayed) {
        clearDisplay(); 
    }
    let text = display.innerText.replace('|', ''); 
    let start = text.substring(0, cursorPosition);
    let end = text.substring(cursorPosition);
    display.innerText = start + input + '|' + end; 
    cursorPosition++;
}

function moveCursorLeft() {
    if (isResultDisplayed) 
        return; 
    if (cursorPosition > 0) {
        cursorPosition--;
        updateDisplay();
    }
}

function moveCursorRight() {
    if (isResultDisplayed) 
        return; 
    let text = display.innerText.replace('|', '');
    if (cursorPosition < text.length) {
        cursorPosition++;
        updateDisplay();
    }
}

function clearDisplay() {
    display.innerText = '|';
    cursorPosition = 0;
    isResultDisplayed = false;
}

function deleteLast() {
    if (isResultDisplayed) 
        return; 
    let text = display.innerText.replace('|', '');
    if (cursorPosition > 0) {
        let start = text.substring(0, cursorPosition - 1);
        let end = text.substring(cursorPosition);
        display.innerText = start + '|' + end;
        cursorPosition--;
    }
}

function calculate() {
    try {
        let text = display.innerText.replace('|', ''); 
        let result = eval(text);
        display.innerText = Number(result.toFixed(10)); 
        isResultDisplayed = true;
    } catch (error) {
        display.innerText = "Error"; 
        isResultDisplayed = true;
    }
}

display.addEventListener("keydown", function (event) {
    event.preventDefault();
});

clearDisplay();
