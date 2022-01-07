
const num = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const calcScreen = document.querySelector('.calculator-screen');
const equals = document.querySelector('.equal-sign');
const clear = document.querySelector('.clear');
const plusMinus = document.querySelector('.plus-minus');
const numBtnLg = document.querySelector('number btn-lg');


let calculation = [];
let previousNum = [];
let currentNum = [];
let currentOp = [];



num.forEach( num => {
    num.addEventListener('click', (e) =>{
        //alert(num..value)
        console.log(currentNum.push(num.value))
        console.log(calculation.push(num.value))
        
        
        console.log(calcScreen.value = num.value)
        console.log(currentNum)
        console.log(calculation)
    })})

operators.forEach(operators =>{
    operators.addEventListener('click', (e) =>{
        //alert(operator.value);
        console.log(currentOp.push(operators.value))
        console.log(calculation.push(operators.value))
        console.log(currentOp)
        console.log(calculation)

        calcScreen.value = operators.value
        
    })})

equals.addEventListener('click', (e) =>{
    alert(equals.value)
    // to str and .join
    switch(currentOp){
    case '+':
        calcScreen.value = previousNum + currentNum
        break;
    case '-':
        calcScreen.value = previousNum - currentNum
        break;
    case '/':
        calcScreen.value = previousNum / currentNum
        break;
    case '*':
        calcScreen.value = previousNum * currentNum
        break;
    default:
        calcScreen.value = "Try again"
        break;
    }
    

})

clear.addEventListener('click', (e) =>{
    calcScreen.value = '0'
    calculation = [];
    previousNum = [];
    currentNum = [];
    currentOp = [];
})






