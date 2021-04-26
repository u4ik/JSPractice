let arr = [1000000000, 2121212, 30000, 4333, 500, 69, 47, 61];
let arr2 = [4358, 21345, 3043, 45347, 345746, 4357, 7, 61];
let arr3 = [1, undefined, true, NaN, null, 7, 8, 6, 3, 2, 3, 9, 5, 6];
let arr4 = ['banana', 'watermelon', 'apricot', 'pudding', 'apple']

class sortStuff {
    static someFuncToSortArrays = (...args) => {
        if (args.length > 0) {
            let sortArr = [];
            args.forEach(item => {
                if (typeof item.includes('string')) {
                    sortArr.push(item.sort());
                }else{
                    sortArr.push(item.sort((a, b) => a - b));
                };
            });
            return sortArr;
        } else {
            return 'no args provided';
        };
    };
};

let sortedArrays = sortStuff.someFuncToSortArrays(arr, arr2, arr3, arr4);

console.log(sortedArrays);