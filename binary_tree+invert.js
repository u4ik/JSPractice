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
    return node
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

const findSomething = (target, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return arr[i];
        };
    };
};

// let tempArr = [1,2,3,4,5,6]

// console.time('Iterative Search NON BINARY');
// console.log(findSomething(201));
// console.timeEnd('Iterative Search NON BINARY');


// console.time('Iterative Search BINARY');
// console.log(findSomethingBinaryWay(220));
// console.timeEnd('Iterative Search BINARY');

let array2 = [5, 4, 3, 2, 1]
let sortedArr = array2.sort((a, b) => a - b); // [1,2,3,4,5]

// class Node {
//     constructor(value, left, right) {
//         this.value = value;
//         this.left = left || null;
//         this.right = right || null;
//     };
// };

class BinaryTree1 {
    constructor() {
        this.root = null
    };
    addNode(node) {


        // console.log('hi');
        // if (this.root === null) return;

        let leftIndex = 0;
        let rightIndex = sortedArr.length - 1;

        let pivotIndex = Math.floor((0 + sortedArr.length - 1) / 2);
        if (leftIndex === pivotIndex) return;
        if (rightIndex === pivotIndex) return;

        let middleVal = sortedArr[pivotIndex];

        let newNode;


        if (this.root === null) {
            this.root = new Node(sortedArr[pivotIndex], new Node(sortedArr[leftIndex]), new Node(sortedArr[rightIndex]));
        }
        let currentVal = this.root.value;
        // let leftPath = this.root.left;
        // let rightPath = this.root.right;
        // if(leftPath === null){
        //     currentVal = sortedArr[pivotIndex - 1]
        //     leftPath = new Node()
        //     leftPath = leftPath.left

        // }


        leftIndex++
        rightIndex--




        this.addNode()
        return this.root;
    };

};

// let root = new BinaryTree().addNode(sortedArr);
// console.log(root);


class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;

    };
};

class BinaryTree {
    constructor() {
        this.root = null
    };

    initialize(array) {
        let pivotIndex = Math.floor((0 + array.length - 1) / 2);
        this.insert(array[pivotIndex])
        array.forEach(i => {
            if (i !== array[pivotIndex]) {
                
                this.insert(i)
            }
        }
        )
    };
    insert(data) {
        const node = new Node(data);
        if (this.root === null) {
            this.root = node;
            return;
        }
        let current = this.root;
        while (true) {
            if (data < current.value) {
                if (current.left === null) {
                    current.left = node;

                    return;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = node;

                    return;
                }
                current = current.right;
            }
        }
    }
}



const findSomethingBinaryWay = (target, arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === arr[mid]) {
            return ` Found ${arr[mid]}`;
        } else if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        };
    };
    return 'Not Found';
};





let tree = new BinaryTree();

// console.log(tree);

tree.initialize(sortedArr)

console.log(treeify(tree));

// console.log(tree);
