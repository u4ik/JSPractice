const cat = {
    name: 'Simmy',
    legs: 4,
    breed: 'Domestic Short Hair',
    food: 'Cat Food',
    diet: '2 cups'
};

//! Bad Code: 

// function feed(animal){
//     return `Feed ${animal.name}, ${animal.diet} of ${animal.food}`;
// };
// console.log(feed(cat));

//? Good Code:

//  -We can destruct the object we pass in by providing the properties we wish to use, as parameters.
function feed({ name, diet, food }) {
    return `Feed ${name}, ${diet} of ${food}.`;
};

console.log(feed(cat));

//OR

// -We can also just pass in the object and set up a variable that holds the keys of that object assigned to the object.
function feed2(animal) {
    const { name, diet, food } = animal;
    return `Feed ${name}, ${diet} of ${food}.`;
};


console.log(feed2(cat));
