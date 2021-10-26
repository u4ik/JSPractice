const ffWrap = (cb) => 
{
    return cb()
}

const ffMap = (arr, f) => 
{
    let ret = []
    for (i of arr) ret.push(f(i))
    return ret
}
const ffCompose = (...args) => 
{
    const [...rest] = args.reverse() // Catogorical Ordering, ie F o G.. for arg 1...n
    return (x) => rest
        .reduce(
            (tmp, cur) => cur(tmp), //application of functions
            x // inital state
        )
}
console.log(
    ffCompose(
        x => x * 2,
        y => y ** 2,
        z => z ** 5,
    )(2)
) // Should return 2048

const ffDoubleShuffleMaker = (fa, na) => {
    let fArr = fa 
    let nArr = na
    let fRandomN = Math.floor(Math.random() * (fArr.length - 1))
    let nRandomN = Math.floor(Math.random() * (nArr.length - 1))
    return () => {
        return fArr[fRandomN](nArr[nRandomN])
    }
}
console.log(
    ffDoubleShuffleMaker(
    [
        x => x * 2,
        y => y ** 2,
        z => z ** 5,
    ],
    [
        8,
        9,
        10
    ])()
)

const ffArgMin = (f, arr) => {
    return (arr
        .map(f)
        .reduce((ret, e) => e > ret ? ret : e ))
}
console.log(ffArgMin(x => x, [-3, 5, -8, 2]))

const ffMakeFlipper = (...args) => {
    let [a, b, first] = [...args, true]
    return () => {
        return (first ? !first : (first && (first = !first)))
            || ((first = !first) || first ? a : b)
    }
}

let flipper = ffMakeFlipper("Justin", "Amit")
console.log(flipper())
console.log(flipper())
console.log(flipper())

const ffPhoenixTimeout = (ms) => {
    return (
        function x(){
            console.log("rising from the ashes")
            setTimeout(() => x(ms), ms)
        })()
}
ffPhoenixTimeout(100)
const ffMemoize = (f) => {
    const prevResults = {} 
    return function fmemo(...args){
        return (
            (prevResults[args.toString()]) || (prevResults[args.toString()] = f(...args))
        )
    }
}

let memoSqr = ffMemoize((x, y) => x * y)
console.log(
    memoSqr(2, 2),
    memoSqr(2, 3),
    memoSqr(2, 2),
)

const add = (a, b) => a + b 

const ffCurry = (f) => (a) => (b) => f(a, b) 

console.log(add(3, 5))
console.log(ffCurry(add)(3)(5))

