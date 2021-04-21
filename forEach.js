let newArr = [1, 2, 4, 5, 6, 7, 8, 9, { name: 'bob' }];

newArr.map((c, i) => {
    c.name === 'bob' ?
    console.log(c.name) :
    null
});

newArr.forEach(r => {
    r.name === 'bob' ?
        console.log(r.name) :
        null
});

