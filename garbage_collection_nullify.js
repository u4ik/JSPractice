//Reference count: When ref count reaches 0, the garbage collector will go into effect and clear up current memory that's allocated.
//What if we just nullify or 'undefine' the items we wish to forcefully reach a reference count of 0??
(function(){
    var x = 5;
    let obj1 = {};
    let obj2 = {};
    let obj3 = {};
    let obj4 = {};
    let obj5 = {};
})();


const nullify = (x) => {
    x = null;
};

nullify(x);

// setTimeout(() => {
//     console.log(x); 
// },500)

console.log(x); 


