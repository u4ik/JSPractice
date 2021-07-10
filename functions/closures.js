// Lets try to create some closures!! Yay!!



let closureFunc = (adjective) => {
    return (noun) => {
        return `The ${adjective} ${noun} `;
    };
};

let newAdj = closureFunc('grey');

console.log(newAdj('cat'));

//************************************************* */
// More Closure?!? 

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





const func1 = (x,y) => {

    return (x,y) => {
        return [x,y]
    }

}

console.log(func1(1,2)); //[Function] because this is what the main func1 returns.

let innerFunc = func1();
console.log(innerFunc(1,2));



const name = (username) => {
    return (message) => {
        return `Welcome ${username}, ${message}`
    }
}




let user = name('Timmy!');
let message = user('hope you are well!');

console.log(message)
