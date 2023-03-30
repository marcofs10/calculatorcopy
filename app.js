const nums = Array.from(document.querySelectorAll('.num'));
const nums2 = Array.from(document.querySelectorAll('.num'));
const ops = Array.from(document.querySelectorAll('.op'));
const numDisplay = document.querySelector('#numDisplay');
const opDisplay = document.querySelector('#opDisplay');
const equal = document.querySelector('.equal');
let answer = 0;

let operator = '';
let num1 = 0;
let num2 = 0;
let num1Chosen = false;
let num2Chosen = false;
let opChosen = false;
//makes sure user cannot put a 0 in front of the number
let apretarCero = true;


nums.forEach(num => num.addEventListener('click', () => insertNumber(num.innerText)))

ops.forEach(op => op.addEventListener('click', () => setOperator(op.innerText)))

equal.addEventListener('click', solve)

function insertNumber(number) {
    
    if(opChosen == true){
        clear();
        //numDisplay.innerText = '';
        opChosen = false;
    }
    //makes sure user cannot put a 0 in front of the number
    if(number=='0'&&apretarCero == true){
        clear();
        number='';
    }else{
        apretarCero = false;
    }

    numDisplay.innerText = numDisplay.innerText + number;
}

function setOperator(opArg) {
    opChosen = true;
    if(num1Chosen==false){
        num1 = parseInt(numDisplay.innerText);
        num1Chosen = true;
    }else{
        num2 = parseInt(numDisplay.innerText)
        num2Chosen = true;
    }
    
    if(num2Chosen == true){
        num1=operate(opDisplay.innerText, num1, num2)
        numDisplay.innerText=`${num1}`;
    }
    opDisplay.innerText = opArg;
}

function solve() {
    num2 = parseInt(numDisplay.innerText);
    num1 = operate(opDisplay.innerText, num1, num2)
    numDisplay.innerText=`${num1}`;
    num1Chosen = false;
    num2Chosen = false;
    num2 = 0;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}

function opadd(num1, num2) {
    return num1 + num2;
}

function clear(){
    numDisplay.innerText = ' ';
}
