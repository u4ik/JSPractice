//Memoization allows us to speed up our functions
//-Store the result of expensive function calls and returning the cache {}

const phoneBook = {};

function humanPhoneNumber(number) {
    return phoneBook[`${number}`] = phoneBook[`${number}`] ||
        "(" + number.substring(0, 3) + ")" + number.substring(3, 6) + "-" + number.substring(6, number.length)
};

// console.log(humanPhoneNumber('3175555555'));

// console.log(phoneBook);


const ridiculouslySlow = (num) => {
    for (let i = 0; i <= num; i++) {
        if (i === num) {
            return i
        }
    }
};

const memoize = (fn) => {
    const cache = {};
    return (...args) => {
        if (cache[args]) {
            return cache[args]
        }
        const result = fn(...args)
        cache[args] = result;
        return result;
    }
};
const fastFunction = memoize(ridiculouslySlow);


console.time();
// console.log(ridiculouslySlow(1000000000)) //Slow OMG Takes Forever!!
console.log(fastFunction(1000000000)); //First Run....Same Speed
console.timeEnd();


console.time();
// console.log(ridiculouslySlow(1000000000)) //Still takes forever the 2nd time around!!
console.log(fastFunction(1000000000)); //Faster the Second run!! 
console.timeEnd();