let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 6;

for (i of arr1) {
    for (k of arr2) {
        let result = i + k === sum
        if (result) {
            console.log(`${i} & ${k} equal ${sum}: ${result}`);
            break;
        }
    };
};




//Arr Numbers Get Random
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr1 = ['firstItem', 'secondItem', 'thirdItem', 'fourthItem'];

//Arr Pets Get Random
let arr1 = ['cat', 'dog', 'bird', 'turtle', 'fish', 'raccoon', 'snake'];
console.log(arr1[Math.floor(Math.random() * arr1.length)]);


