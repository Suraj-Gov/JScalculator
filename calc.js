let display = document.querySelector('.display-box');
let expression = document.querySelector('.expression');
let x = 0;
let operation = '';
expression.innerText = '';

const inputs = document.querySelectorAll('.digits');
for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', function(event) {
        inputHandle(event.target.innerText);
    });
}

const operators = document.querySelectorAll('.operators');
for(let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function(event) {
        operatorHandle(event.target.innerText);
    })
}

function inputHandle(givenInput) {
    if(display.innerText == "Infinity") clear(0);
    if(display.innerText == '0') display.innerText = givenInput;
    else display.innerText += givenInput;
    if(expression.innerText == '0') expression.innerText = givenInput;
    else expression.innerText += givenInput;
}

function operatorHandle(givenOperator) {
    if(display.innerText == "Infinity") clear(0);
    givenOperator = givenOperator.toString();
    switch(givenOperator) {
        case 'CLEAR':
            clear(0);
            break;
        case '⌫':
            backspace();
            break;
        case '=':
            calc(operation);
            display.innerText = x;
            expression.innerText = expression.innerText.slice(0, -1) + '=' + x;
            x = 0;
            break;
        default:
            calc(givenOperator);
            console.log(`Value of x is ${x}`);
            clear(1);
            break;
    }
}

function clear(option) {
    {
        display.innerText = 0;
        if(option == 0) {
            x = 0;
            expression.innerText = '';
            console.log('cleared buffer');
        } else console.log('cleared');
    }
}

function backspace() {
    if(display.innerText == '0' || display.innerText.length == 1) {
        display.innerText = 0;
        console.log('backspace complete')
    }
    else {
        display.innerText = display.innerText.toString().slice(0, -1);
        console.log('backspace last character');
    }
    expression.innerText = expression.innerText.toString().slice(0, -1);
}

function calc(givenOperator) {
    if(x === 0) {
        x = parseInt(display.innerText);
        console.log("converts to non zero");
    }
    else {
        if(givenOperator == '+') x += parseInt(display.innerText);
        else if(givenOperator == '-') x -= parseInt(display.innerText);
        else if(givenOperator == 'X') x = x * parseInt(display.innerText);
        else if(givenOperator == '/') x = Math.floor(x / parseInt(display.innerText));
        console.log(x);
    }
    operation = givenOperator;
    if(expression.innerText != '') expression.innerText += givenOperator;
}

