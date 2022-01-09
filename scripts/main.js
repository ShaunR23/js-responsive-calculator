const num = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const calcScreen = document.querySelector('.calculator-screen');
const equals = document.querySelector('.equal-sign');
const clear = document.querySelector('.clear');

let calculation = [];
let previousNum = [];
let currentNum = [];
let currentOp = [];


num.forEach(num => {
    num.addEventListener('click', (e) => {
        //alert(num..value)
        currentNum.push(num.value)
        calculation.push(num.value)
        calcScreen.value = calculation
        console.log(calcScreen.value = num.value)

    })
})

operators.forEach(operators => {
    operators.addEventListener('click', (e) => {
        //alert(operator.value);
        calculation.push(operators.value)
        currentOp = operators.value
        previousNum = currentNum
        currentNum = []
        calcScreen.value = operators.value

    })
})

equals.addEventListener('click', (e) => {
    // alert(equals.value)

    switch (currentOp) {
        case '+':
            calcScreen.value = Number(previousNum) + Number(currentNum)
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




clear.addEventListener('click', (e) => {
    calcScreen.value = '0'
    calculation = [];
    previousNum = [];
    currentNum = [];
    currentOp = [];
})
