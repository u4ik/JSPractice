const person1 = {
    name: 'Bob',
    age: 30,
    address: {
        city: 'Springfield',
        state: 'One of them'
    }
}
const person2 = {
    name: 'Sally',
    age: 35,
    // favFood:'Rice', |OUTPUT| favFood: 'Rice' OR 'No food selected', since we provided a default below
    address: {
        city: 'Chicago',
        state: 'Illinois'
    }
}

// We can create our own variable to represent the data, instead of referencing and holding onto the keyname as a variable

const { name: firstName1, favFood1 = 'No food selected', ...rInfo1 } = person1;
const { name: firstName2, favFood2 = 'No food selected', ...rInfo2 } = person2;

// console.log({ firstName1, favFood1 });

// Let's make use of this data and create two new objects with each person's name as the parent key for the rest of their info  :D


// Can use square brackets to directly to use a variables value as the keyname eg. Bob, not firstName1...
let sallysObj = {[firstName2]: {...rInfo2}}
let bobsObj = {[firstName1]: {...rInfo1} }

let peopleObj = {...sallysObj, ...bobsObj}

//* Success!
console.log(peopleObj);

// Lets also use some obj destructuring inside of a function

const getPerson = ({name, age}) => {
    return name + "'s age is: " + age;
}

console.log(getPerson(person1)); // Bob's age is 30
