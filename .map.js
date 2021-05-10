let arr = [1, 2, 3, 4, 5, 6, 7, 8, { name: 'Joe' }, true, 'something', obj = { anotherName: 'bob' }, 77];


arr.map((item, index) => {
    console.log(item.name);
});


let arr1 = [{ user: 'taco', age: 50 }, { user: 'banana', age: 70 }, { user: 'taco', age: 50 }];
let obj = arr1.map((info) => ({

    username: info.user,
    age: info.age

}));

console.log(obj);