//Tax Checker
tax = .07
cost = 563

const checkTax = (cost, tax) => {
    taxVal = cost * tax;
    total = cost + taxVal;
    return total;
}
console.log(checkTax(cost, tax))



function square(x) {
    x = x * x;
    return x;
}
var y = 10;
console.log(square(y));
console.log(y);


//IIFE - Immediately Invoked Function Expression
//(...args) - Rest Parameter - allows infinite arguments, which then the values get stored into an array. args = [arg1,arg2,arg3,arg4]


(function test(...args) {
    console.log('hello',args[0]);
})('timmy')


//Closure??

let closureFunc = (adjective) => {
    return (noun) => {
        return `The ${adjective} ${noun} `;
    };
};

let newAdj = closureFunc('grey');

console.log(newAdj('cat'));

