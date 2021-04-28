let date = new Date();
let month = date.getMonth() + 1;
let dayNum = date.getUTCDate();
let year = date.getFullYear();

let fullDate = month+'/'+dayNum+'/'+year;

console.log(fullDate);

var hours = date.getHours();
var minutes = date.getMinutes();
var ampm = hours >= 12 ? 'pm' : 'am';
hours = hours % 12;
hours = hours ? hours : 12;
minutes = minutes < 10 ? '0' + minutes : minutes;
var stringTime = hours + ':' + minutes + ' ' + ampm;

console.log(stringTime, fullDate);



