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
    speak: function() {
        console.log(this.talk);
    }
}

animal.speakArrow() // undefined
animal.speak() // woof

// --------------------------------------------------------------------------------------------
{
    this.table = 'window table';
    
    function cleanTable () {
        console.log(this.table); 
    }
    const cleanTableArrow = () => {
        console.log(this.table); 
    }    

    cleanTable() // undefined
    cleanTable.call(this) //window table
    cleanTableArrow() // window table


    this.garge = {
        table: 'garage table'
    }
    
    livingRoom = {
        table: 'living room table'
    }
}        


class Method {
    table = 'method table'

    cleanTableMethod1(){
        console.log(this.table)
    }    
    cleanTableMethod2 =() =>{
        console.log(this.table)
    }    
}    

let m1 = new Method;
m1.cleanTableMethod1()
m1.cleanTableMethod2()

