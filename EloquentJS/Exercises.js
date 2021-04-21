//Making a # sign triangle
let count = 0;
let numSign = '#';
while (count <= 5) {
    count++;
    console.log(numSign)
    numSign += '#'
};

//Xmas tree
[10,1].forEach(row => {
  
    new Array(row).fill('').forEach((value,index) => {
        
        console.log([
          
            ...new Array(49-index).fill('*'),
            ...new Array(1+index*2).fill('^'),
            ...new Array(49-index).fill('*')
        ].join(''))
    })
})



//Making a chess board grid scalable by height and width
let width = 3;
let height = 4;
let row1 = '# ';
let row2 = ' #';
while (height >= 1) {
    if (width > 1) {
        for (width; width >= 1; width--) {
            row1 += row1;
            row2 += row2;
        }
    } else {
        row1 = row1;
        row2 = row2;
    }
    if (height % 2 === 0) {
        console.log(row1);
    } else {
        console.log(row2);
    }
    height--;
};

// function to show the min between two numbers

const min = (firstNum, secondNum) => {
    return Math.min(firstNum, secondNum);
}
console.log(min(5, 7))

// Check if num is even or odd using a recursive function
//add negative number functionality

function isEven(num) {
    function find(num) {
        if (num === 0) {
            return `${true}, the number is even!`;
        } else if (num === 1) {
            return `${false}, the number is odd!`;
        } else if (num >= 2) {
            num -= 2;
            return find(num);
        } else if (num < 0) {
            return find(Math.abs(num));
        }
    }
    return find(num);
}
console.log(isEven(-50));


//Counting letters are in a string
let string = 'Brenda has a dog named Bruno'
let letterToBeCounted = 'b'
let x = 0;
let count = 0;

const countBs = (string, character) => {
    for (x = 0; x <= string.length - 1; x++) {
        if (string[x] === character) {
            count++;
        }
    };
    return count;
};

console.log(countBs(string.toLowerCase(), letterToBeCounted));

//Object Chapter***********
let journal = [];
addEntry = (events, squirrel) => {
    journal.push({ events, squirrel })
};
addEntry(["work", "touched tree", "pizza", "running"], false);

console.log(journal)
//Output
// [{
//     events: ['work', 'touched tree', 'pizza', 'running'],
//     squirrel: false
// }]



//Infinite For Loop?
x = 1

for (let i = 0; i = x; i++) {
    console.log('hello')
}



