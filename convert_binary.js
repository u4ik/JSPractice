//Binary requires the prefix '0b' to be written as a number
let num = 0b0101010;
console.log(num.toString()); //42...

let num = "0101010";
console.log(parseInt(num, 2)); //42..it works....binary string -> int