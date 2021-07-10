let steps = 40000000
let stepsArr = new Array(steps)


console.time('For of Loop:')
for (step of new Array(steps) {
    if (step === steps.length) {
        console.log(step);
    }
}
console.timeEnd('For of Loop:')

console.time('Traditional Loop:')
for (i = 0; i < steps; i++) {
    if (i === steps) {
        console.log('Finished');
    }
}
console.timeEnd('Traditional Loop:')

console.time('For in Loop:')
for (step in new Array(steps)) {
    if (step === steps.length - 1) {
        console.log('Finished');
    }
}
console.timeEnd('For in Loop:')

//* Need to fix some things