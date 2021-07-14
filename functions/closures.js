// Lets try to create some closures!! Yay!!

let closureFunc = (adjective) => {
    return (noun) => {
        return `The ${adjective} ${noun} `;
    };
};

let newAdj = closureFunc('grey');

console.log(newAdj('cat'));

//************************************************* */

let outer = (func) => {
    return func
};

console.log(outer(() => {
    return 'secret'
})); // undefined

let innerAcess = outer(() => {
    return 'secret'
});

console.log(innerAcess()); // secret

const func1 = (x, y) => {

    return (x, y) => {
        return [x, y]
    }

}

console.log(func1(1, 2)); //[Function] because this is what the main func1 returns.

let innerAnonFunc = func1(); // Have to use reassignment to access closures or nested functions
console.log(innerAnonFunc(1, 2)); // An array of [1,2]

// ***************************************************************************
const closureFunc1 = (flag) => {
    let res;
    let aFunction;
    switch (flag) {
        case 'add':
            res = 'Here are your two numbers added.'
            return [(x, y) => x + y, res]
        case 'sub':
            res = 'Here are your numbers subtracted.'
            return [(x, y) => x - y, res]
        case 'divide':
            res = 'Here are your numbers divided.'
            return [(x, y) => x / y, res]
        case 'multiply':
            res = 'Here are your two numbers multiplied.'
            return [(x, y) => x * y, res]
    }
}

const mathFunc = (operation, message) => {
    return { operation, message }
}
let add = closureFunc1('add');
let sub = closureFunc1('sub');
let div = closureFunc1('divide');
let mult = closureFunc1('multiply');

let num1 = 3
let num2 = 5

console.log(mathFunc(add[0](num1, num2), add[1]))


//*************************************************************************** */


let deepClosure = z => z => z => z => {
    return `You found me ${z}!`;
}

let firstStep = deepClosure()
let secondStep = firstStep();
let thirdStep = secondStep();
// let fourthStep = thirdStep(); //! Error fourthStep is not a function
// console.log(thirdStep(1)); //? Output: You found me 1!

//*************************************************************************** */
const name = (username) => {
    return (message) => {
        return `Welcome ${username}, ${message}`
    }
}

let user = name('Timmy!');
let message = user('hope you are well!');

console.log(message)