//Passing by reference
//? The computer object key's value is being changed directly within the function.
function turnOn(machine) {
	machine.isOn = true;
	return machine.isOn
}

var computer = {
	isOn: false
};
turnOn(computer);
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


// Passing by Value
let x = 1;
let y = x + 1;
let z = y + 1;

// Each value gets copied to a new variable.
console.log({ x, y, z })

// Passing by Refernce

let arr1 = [1, 2, 3, 4, 5]
let arr2 = arr1
arr2.push(6)

// Even though arr2's array was pushed. It affected arr1..because they are both pointing to the same array in memory.
console.log({ arr1 })














