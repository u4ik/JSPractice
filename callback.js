//Callback functions
const x = () => {
    console.log('im called in a function')
}

const y = function(taco) {
    console.log('doing something first')

    // taco();
    x()
}

y(x)


// if(calcType === 'add'){
//     return num1 + num2;
// } else if (calcType === 'multiply'){
//     return num * num2;
// };




let add = function(a, b) {
    return a + b
};
let subtract = function(a, b) {
    return a - b
};
let multiply = function(a, b) {
    return a * b
};
let divide = function(a, b) {
    return a / b
};
let doWhatever = function(a, b) {
    console.log(`here are your two numbers back ${a}, ${b}`)
}
let calc = function(num1, num2, operator) {
    return operator(num1, num2);
};

let num1 = 12;
let num2 = 6;
let operator = divide;

console.log(calc(num1, num2, operator));
