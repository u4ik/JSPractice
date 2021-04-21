
let a = [];

let f = (n,prevValues = []) => {
    if (prevValues[n] != null) {
        return prevValues[n];
    }
    let result;
    if (n <= 2) {
        result = 1
    }
    else {
        result = f(n - 1,prevValues) + f(n - 2,prevValues)
    }
    prevValues[n] = result;
    return result;
};


// let f2 = (n,pv=[]) => {
//     pv[n] != null ? pv[n]:null;
//     let r;
//     n<=2 ? r = 1 : r = f2(n - 1,pv) + f2(n - 2,pv);
//     pv[n] = r;
//     return r;
// } 
for (let i = 1; i <= 1000; i++) a.push(f1(i));
console.time('Time');
console.log(a);
console.timeEnd('Time');
