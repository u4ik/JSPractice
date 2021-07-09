let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 6;

for (let i of arr1) {
    for (let k of arr2) {
        let result = i + k === sum
        if (result) {
            console.log(`${i} & ${k} equal ${sum}: ${result}`);
            break;
        }
    };
};



let target = 17;
let numArr = [2, 6, 5, 7, 8, 9, 11, 14];

const addArrTarget = (nums, target) => {
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log([i, j]);
                break;
            };
        };
    };
};

addArrTarget(numArr, target);

// let numArr1 = [6, 6, 6]
// let numArr2 = [5, 5, 5]
// for (i = 0; i < numArr1.length; i++) {
//     for (j = i + 1; j < numArr2.length; j++) {
//         console.log(numArr1[j] + numArr2[i])
//     }
// }

// console.log(7 % 10)



//Reverse a number and remove 0 as it's prefix


let x = 123451234512345 // Reverse output Correct : 543215432154321

let x = 12345123451234512345  // Reverse output : 31543215432154320....adding bigInt numeric literal 'n' 54321543215432155000

let x = -2147483412
var reverse = function (x) {
    let split;
    if (x > 0) {
        split = x.toString().split('').reverse().join().replace(/,/g, '');
        if (split.length >= 10) {
            split = 0;
        }
    } else {
        split = "-" + x.toString().split('').reverse().join().replace(/,/g, '');
        if (split.length >= 11) {
            split = x;
        }
    }
    return parseInt(split);
};
console.log(reverse(x));



//Return first duplicate in an array


let arr = [2, 1, 3, 5, 3, 2];

let holdVals = [];

let dupeHolder = [];

for (let i = 0; i < arr.length; i++) {
    checkVals(i)
};

function checkVals(i) {
    if (holdVals.includes(arr[i])) dupeHolder.push(arr[i]);
    holdVals.push(arr[i]);
};

console.log(dupeHolder[0]);


function firstDuplicate(a) {

    var holdVals = [];

    var dupeHolder = [];

    for (let i = 0; i < a.length; i++) {
        checkVals(i)
    };

    function checkVals(i) {
        if (holdVals.includes(a[i])) dupeHolder.push(a[i]);
        holdVals.push(a[i]);

    };

    if (dupeHolder.length === 0){
        return -1
    }
    return dupeHolder[0]
}


console.log(firstDuplicate([2, 1, 3, 5, 3, 2]))

