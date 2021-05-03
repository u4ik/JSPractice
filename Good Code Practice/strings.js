//Combining strings with functions

const horse = {
    age: 5
};

function horseAge(str, age){
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years.`;
};


const bio = horseAge`This horse is ${horse.age}`;

console.log(bio); // This horse is young at 5 years.