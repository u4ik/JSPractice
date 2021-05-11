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
    if(node == 'undefined'){
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


console.log(treeify(node));

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


let array = [1,2,3,4,5,6,7,8,9,10];

