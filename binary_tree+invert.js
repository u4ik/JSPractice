let treeify = require('object-treeify')

/* 
         [17]
          /\
    [15]      [18]
     /\        /\
  [4]  [7]  [12] [14]

  ├─ val: 17
    ├─ left
    │  ├─ val: 15
    │  ├─ left
    │  │  └─ val: 4
    │  └─ right
    │     └─ val: 7
    └─ right
    ├─ val: 18
    ├─ left
    │  └─ val: 12
    └─ right
        └─ val: 14
*/

let node = {
    val: 17,
    left: {
        val: 15,
        left: {
            val: 4
        },
        right: {
            val: 7
        }
    },
    right: {
        val: 18,
        left: {
            val: 12
        },
        right: {
            val: 14
        }
    }
};

const reverseNodes = (node) => {
    if (node == 'undefined') {
        node = null;
    }
    if (node == null) {
        return;
    };
    reverseNodes(node.left);
    reverseNodes(node.right);
    let hold = node.left;
    node.left = node.right
    node.right = hold;
    // return node
}

reverseNodes(node);


// console.log(treeify(node));

/* Great, it's inverted....but I shouldn't invert it in this way....the left rights are included in the children too...
 ............scalability!! Lol...yea idk.
├─ val: 17
├─ left
│  ├─ val: 18
│  ├─ left
│  │  ├─ val: 14
│  │  ├─ left
│  │  └─ right
│  └─ right
│     ├─ val: 12
│     ├─ left
│     └─ right
└─ right
   ├─ val: 15
   ├─ left
   │  ├─ val: 7
   │  ├─ left
   │  └─ right
   └─ right
      ├─ val: 4
      ├─ left
      └─ right

*/


let array = [13, 16, 19, 25, 28, 34, 39, 42, 53, 55, 62, 67, 68, 70, 75, 82, 99, 103, 104, 105, 107, 107, 108, 109, 110, 111, 112, 115, 119, 120, 150, 180, 200, 201, 202, 203, 204, 205, 207, 210, 220, 250, 270, 290];

const findSomething = (target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == target) {
            return array[i];
        };
    };
};

let tempArr = [1,2,3,4,5,6]

console.time('Iterative Search NON BINARY');
console.log(findSomething(201));
console.timeEnd('Iterative Search NON BINARY');

const findSomethingBinaryWay = (target) => {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (target === array[mid]) {
            return array[mid];
        } else if (target < array[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        };
    };
    return 'Not Found';
};

console.time('Iterative Search BINARY');
console.log(findSomethingBinaryWay(220));
console.timeEnd('Iterative Search BINARY');