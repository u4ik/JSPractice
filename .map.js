let arr = [1, 2, 3, 4, 5, 6, 7, 8, { name: 'Joe' }, true, 'something', obj = { anotherName: 'bob' }, 77]


arr.map((item, index) => {
    console.log(item.name)
}) 