
//Arr Numbers Get Random
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr1 = ['firstItem', 'secondItem', 'thirdItem', 'fourthItem'];

//Arr Pets Get Random
let arr1 = ['cat', 'dog', 'bird', 'turtle', 'fish', 'raccoon', 'snake'];
console.log(arr1[Math.floor(Math.random() * arr1.length)]);


//Mutable Remove Crap From An Array/ Loop Starts At The End

let arr = [{ key: 'value' }, 'cat', 5, undefined,null,"hello", "lalala", 45, 'dog', 19, '7'];

for (let i = arr.length - 1; i >= 0; i--) {
    if (typeof arr[i] !== 'number') {
        arr.splice(i, 1)
    };
};

console.log(arr); // [ 5, 45, 19 ]


