function talk() {
    // console.log(this);
    console.log(this.sound);
}

const talk2 = () => {
    // console.log(this);
    console.log(this.sound);
} // Using this arrow function will log only {} as this

let dog = {
    sound: "woof",
    speak: talk
}

// dog.speak()// woof
// talk() // undefined

let talkFunc = dog.speak
// talkFunc() // undefined

let talkFunc2 = dog.speak.bind(dog)
//OR
let boundFunc = talkFunc2.bind(dog)
// boundFunc() // woof
// talkFunc2() // woof

class Animal {
    constructor(sound) {
        this.sound = sound
    }
    speak = () => {
        console.log(this.sound);
    }
}

let doggy = new Animal('woof')
// doggy.speak(); //woof

let animal = {
    talk: 'woof',
    speakArrow: () => {
        console.log(this.talk);
    },
    speak: function () {
        console.log(this.talk);
    }
}

animal.speakArrow() // undefined
animal.speak() // woof

// --------------------------------------------------------------------------------------------
// GLOBAL SCOPE
// --------------------------------------------------------------------------------------------

this.table = 'window table';

function cleanTable() {
    console.log(` Cleaning  ${this.table}`);
}
const cleanTableArrow = () => {
    console.log(` Cleaning ${this.table}`);
}

cleanTable() // undefined
cleanTable.call(this) //cleaning window table
cleanTableArrow() // cleaning  window table

this.garage = {
    table: 'garage table'
}
cleanTable.call(this.garage) // cleaning the garage table

livingRoom = {
    table: 'living room table'
}

// Using a constructor function to create a room
let createRoom = function (name) {
    this.table = `${name}'s room`
}

const jillsRoom = new createRoom("Jill")

cleanTable.call(jillsRoom) // cleaning Jill's room

// OR

// Adding a prototype to the createRoom constructor function
createRoom.prototype.cleanTable = function (){
    console.log(`Cleaning  ${this.table}`);
}

jillsRoom.cleanTable()

// Can accomplish the same as above by using a class with a method
class createRoomClass {
    constructor(name){
        this.table = `${name}s table`
    }
    
    cleanTable(){


        console.log(`Cleaning  ${this.table}`);
    
        function cleanTableNested (){
            console.log(this.table);
        }
        
        const cleanTableNestedArrow = () => {
            console.log(this.table);

        }
        cleanTableNested.call(this)
        cleanTableNestedArrow()
    
    }

    logTable(){
        console.log(this.table);
    }
}

let newRoom = new createRoomClass('new room')
newRoom.cleanTable()