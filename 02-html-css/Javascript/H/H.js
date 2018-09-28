var calculator = function (operator, number1, number2) {
    if (operator == '+') {
        return number1 + number2;
    } else if (operator == '-') {
        return number1 - number2;
    } else if (operator == '*') {
        return number1 * number2;
    } else if (operator == '/') {
        return number1 / number2;
    } else {
        return 'Not valid input';
    }
 }
 console.log(calculator('+', 7, 4));