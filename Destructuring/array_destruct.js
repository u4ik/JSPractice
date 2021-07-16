// Basic destructuring
// *******************************************
let numArr = [1, 2, 3, 4, 5, 6];
let charArr = ['A', 'B', 'C', 'D', 'E', 'F'];

let [n, c] = numArr;
console.log({ n, c }); // { n: 1, c: 2 }

// Combining w/ spread (can also use arr1.concat(arr2)) to combine arrs
// *******************************************

let combineArrs = [...numArr, ...charArr];
console.log(combineArrs); // - Arrays combined

// Default assignments
// *******************************************
const someFunc = (w1, w2, w3, w4, w5 = 'word 5 not provided') => {
    return [w1, w2, w3, w4]
}
//? Can provide a new variable & default, in case you expect it being added later to the array. 
const [first, second, third, fourth, fifth = '/END']
    = someFunc(
        "Let's",
        "pass",
        "in",
        "some",
        // "words!" |OUTPUT| fifth: 'word 5 not provided' OR /END if w5 isn't being returned in the array above
    );

console.log({ first, second, third, fourth, fifth });


