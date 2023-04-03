const nums = Array.from(document.querySelectorAll('.num'));
const nums2 = Array.from(document.querySelectorAll('.num'));
const ops = Array.from(document.querySelectorAll('.op'));
const numDisplay = document.querySelector('#numDisplay');
const opDisplay = document.querySelector('#opDisplay');
const equal = document.querySelector('#equal');
const eraser = document.querySelector('#erase');
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

eraser.addEventListener('click', erase)



function insertNumber(number) {
    animation(number);

    if(num1Chosen==true && opChosen==false){
        opChosen=true;
        clear();
    }
    /*
    if(opChosen == true){
        
        opChosen = false;
    }*/
    //makes sure user cannot put a 0 in front of the number
    if(number=='0'&&apretarCero == true){
        clear();
        number='0';
    }else{
        apretarCero = false;
    }

    if(numDisplay.innerText=='0'){
        numDisplay.innerText = number;
    }else{
        numDisplay.innerText = numDisplay.innerText + number;
    }
    
}

function setOperator(opArg) {
    animation(opArg);

    /*opChosen = true;*/
    if(num1Chosen==false){
        num1 = parseInt(numDisplay.innerText);
        num1Chosen = true;
    }else if(opChosen==true){
        num2 = parseInt(numDisplay.innerText)
        num2Chosen = true;
        opChosen=false;
    }
    
    if(num2Chosen == true){
        num1=operate(opDisplay.innerText, num1, num2)
        numDisplay.innerText=`${num1}`;
    }
    opDisplay.innerText = opArg;
}

function solve() {
    animation('equal');

    num2 = parseInt(numDisplay.innerText);
    num1 = operate(opDisplay.innerText, num1, num2);
    numDisplay.innerText=`${num1}`;
    /*num1Chosen = false;*/
    num2Chosen = false;
    opChosen = false;
    //Once the operation is done, it resets num2
    num2 = 0;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case 'x':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}

function clear(){
    numDisplay.innerText = '0';
}

function erase(){
    animation('erase');

    numDisplay.innerText = numDisplay.innerText.slice(0,-1);
    if(numDisplay.innerText==''){
        numDisplay.innerText = '0';
    }
}

function animation(button){
    const key = document.querySelector(`button[id="${button}"]`);
    key.classList.add('click');
    setTimeout(function(){
        key.classList.remove('click');
    },50)
}
