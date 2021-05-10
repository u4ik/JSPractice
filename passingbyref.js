//Passing by reference
//? The computer object key's value is being changed directly within the function.
function turnOn(machine) {
    machine.isOn = true;
    return machine.isOn
}

var computer = {
    isOn: false
};
turnOn(computer)
console.log(computer.isOn); //true
console.log(computer);

//? The computer Object key's value is NOT being changed directly within the function.

function turnOn(machine) {
   return machine = {
        isOn: true
    };
}

var computer = {
    isOn: false
};

turnOn(computer);

console.log(computer.isOn); // false;
console.log(computer);