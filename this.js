function talk ()  {
    // console.log(this);
    console.log(this.sound);
}

const talk2  = () =>  {
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
    constructor(sound){
        this.sound = sound
    }
    speak =  () => {
        console.log(this.sound);
    }
}

let doggy = new Animal('woof')
// doggy.speak(); //woof

let animal = {
    talk : 'woof',
    speak: () => {
        console.log(this.talk);
    },
    speak2(){
        console.log(this.talk);
    }
}

animal.speak() // undefined
animal.speak2() // woof
