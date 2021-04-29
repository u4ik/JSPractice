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
// Syntax - Wrapped in parenthesis along with a pair at the end where arguments may be passed.
//    -((param)=>{})(argument)
//    -(function(param)=>{})(argument)
//(...args) - Rest Parameter - allows infinite arguments, which then the values get stored into an array. args = [arg1,arg2,arg3,arg4]


((...args) => console.log(args))(1,2,true,undefined,null,NaN,{color: 'green'})