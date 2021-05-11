//Reference count: When ref count reaches 0, the garbage collector will go into effect and clear up current memory that's allocated.
//What if we just nullify or 'undefine' the items we wish to forcefully reach a reference count of 0??
var x = 5;
var obj1 = {};
let obj2 = {};
let obj3 = {};
let obj4 = {};
let obj5 = {};

console.log(x,obj1); 


const nullify = () => {
    x = null;
    obj1 = null;
};

nullify();

// setTimeout(() => {
//     console.log(x); 
// },500)

console.log(x,obj1); 


