//? ***********************************************************************************
//* In JS, you can predefine any scope with {}

let x = 1;
{ let y = 2 }

// console.log(x,y); //! y is not defined

//? ***********************************************************************************
//* Check if there's a property in an object using for IN

let person = {
    name: "",
    age: 29
}

// if ('name' in person) console.log('Has name!'); //? Has Name

//? ***********************************************************************************
// Nullish Coalescing 

const getUser = (name, hobby, favNum) => {
    name = name || 'Default'
    hobby = hobby || 'Default'
    favNum = favNum || 'Default'
    console.log({ name, hobby,favNum });
}
getUser() //{ name: Default, hobby: Default, favNum: Default }
getUser(undefined,undefined) //{ name: Default, hobby: Default, favNum: Default }
getUser('Billy', 'Soccer', 0)// { name: 'Billy', hobby: 'Soccer', favNum: 'Default } //! Notice the fav Num is set to Default!! 0 is falsy

// Replace OR syntax with ?? - This will check if the value is null or undefined, instead of truthy/falsy.

const getUser1 = (name, hobby, favNum) => {

    name = name ?? 'Default'
    hobby = hobby ?? 'Default'
    favNum = favNum ?? 'Default'

    console.log({ name, hobby,favNum });

}

getUser1() //{ name: Default, hobby: Default, favNum: Default }
getUser1(undefined,undefined) //{ name: Default, hobby: Default, favNum: Default }
getUser1('Billy', 'Soccer', 0)// { name: 'Billy', hobby: 'Soccer', favNum: 'Default } 


//? ***********************************************************************************
// Optional Chaining //! Not in latest node ? 

class Person {
    constructor(name,location){
        this.name= name,
        this.location= location
    }

    print(){
        console.log(this);
    }

}

let Amit = new Person('Amit')
Amit.print();

// console.log(Amit.location.street) //! Throws Error

console.log(Amit?.location?.street)

//? ***********************************************************************************