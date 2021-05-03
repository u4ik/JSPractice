let x = 12;
let y = 7;
let z = 18;

//Wrapping the variables in curlys will also present the variable names in the console.log
console.log({x,y,z});
console.log('%c Variables', 'color:blue'); // Can provide CSS properties in the browser
console.table({x,y,z}); //Display table, great for arrays

//Log computed time in ms
console.time('Looper');
while(x<10000000) x++
console.timeEnd('Looper') // ~11ms

//Console log a message, with color to indicate importance between logs within the web browser's console.
console.log("%c Important! ", "color:red; font-size:1.5em; background: rgba(0,0,0,.5); border: 1px solid blue;font-weight: 600;border-radius:20px;padding:1px");