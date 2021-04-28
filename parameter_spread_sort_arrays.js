class sortStuff {
    static someFuncToSortArrays = (...args) => {
        let sortArr = [];
        if (args.length > 0) {
            args.forEach((item, index) => {
                if (typeof item[0] === 'number') {
                    sortArr.push(item.sort((a, b) => a - b));
                } else if (typeof item[0] === 'string') {
                    sortArr.push(item.sort());
                };
            });
            return sortArr;
        } else {
            return 'No args provided!';
        };
    };
};



console.log(
    sortStuff.someFuncToSortArrays(
        [1000000000, 2121212, 30000, 4333, 500, 69, 47, 61],
        [4358, 21345, 3043, 45347, 345746, 4357, 7, 61],
        [1, undefined, true, NaN, null, 7, 8, 6, 3, 2, 3, 9, 5, 6],
        ['banana', 'watermelon', 'apricot', 'pudding', 'apple'],
        ['banana', 1, 2, 'taco']
        )
);