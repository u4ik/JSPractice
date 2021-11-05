let steps = 4000000
let stepsArr = [...Array(steps).keys()]

console.time('For of Loop:')
for (step of stepsArr) {
    if (step === stepsArr.length-1) {
        console.log('For of loop - Finished');
    }
}
console.timeEnd('For of Loop:')

console.time('Traditional Loop:')
for (i = 0; i < stepsArr.length; i++) {
    if (i === stepsArr.length-1) {
        console.log('Traditional for loop - Finished');
    }
}
console.timeEnd('Traditional Loop:')

console.time('For in Loop:')
for (step in stepsArr) {
    if (+step === stepsArr.length-1) {
        console.log('For in loop - Finished');
    }
}
console.timeEnd('For in Loop:')

/*
        OUTPUT
    Fastest to slowest
__________________________
Traditional for loop - Finished
? Traditional Loop:: 11.237ms
For of loop - Finished
? For of Loop:: 47.233ms
For in loop - Finished
? For in Loop:: 840.516ms

*/
