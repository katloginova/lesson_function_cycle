function checkSign(){
    let sign = prompt('Enter an arithmetic sign');

    while ((sign !== '+') && (sign !== '-') && (sign !== '*') && (sign !== '/')) {
        sign = prompt('Enter an arithmetic sign');
    }
    return sign;
}

function checkNumber(question) {
    let number = prompt(question);

    while (!number || (number === '') || isNaN(+number)) {
        number = prompt(question);
    }
    return (+number);
}

function sum(number1, number2) {
    return (number1 + number2);
}

function subtraction(number1, number2) {
    return (number1 - number2);
}

function multiplication(number1, number2) {
    return (number1 * number2);
}

function division(number1, number2) {
    return (number1 / number2).toFixed(2);
}

function calculate(number1, number2, sign){
    let result;
    const exspession = `${number1} ${sign} ${number2} = `;

    switch (sign) {
        case '+':
            result = `${exspession} ${sum(number1, number2)}`;
            break;
        case '-':
            result = `${exspession} ${subtraction(number1, number2)}`;
            break;
        case '*':
            result = `${exspession} ${multiplication(number1, number2)}`;
            break;
        case '/':
            result = `${exspession} ${division(number1, number2)}`;
            break;
    }
    return result;
}

const operator = checkSign();
const operandA = checkNumber('Enter the first number');
const operandB = checkNumber('Enter the second number');
alert(calculate(operandA, operandB, operator));