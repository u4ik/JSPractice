let arr = [1, 2, 3, 4, 5, 6, 7, 8, { name: 'Joe' }, true, 'something', obj = { anotherName: 'bob' }, 77];


arr.map((item, index) => {
    if(item.name !== undefined){
        console.log(item.name);
    }
});


let arr1 = [{ user: 'taco', age: 50 }, { user: 'banana', age: 70 }, { user: 'taco', age: 50 }];
let obj1 = arr1.map((info) => ({

    username: info.user,
    age: info.age

}));

console.log(obj1);

let dogArray = ['lab', 'shiba inu', 'husky', 'st bernard', 'golden retriever'];

const dogBark = (dog) => {
    return `The ${dog} went woof!`;
};

dogArray.map((doggy) => {
    console.log(dogBark(doggy));
});