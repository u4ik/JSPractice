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

//Idk wtf I did but this doesn't work anymore lol
let x = 123451234512345 // Reverse output Correct : 543215432154321

let x = 12345123451234512345  // Reverse output : 31543215432154320....adding bigInt numeric literal 'n' 54321543215432155000

let x = -2147483412
var reverse = function(x) {
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


// Write code below that sums all even products of x*y for where x = 1..100
// y = 1..200

// Take that sum and find the nearest prime number!

console.log(((s=>{for(i=0;i<s;i++)s%i==0?s--:null;return s}))(((s)=>{for(x=1;x<100;x++){for(y=1;y<200;y++){p=x*y;p%2==0?s+=p:null}}return s})(0)))

//My greatest creation^