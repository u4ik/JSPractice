const person = {};
person['firsName'] = 'bob';
person['lastName'] = 'smith';

console.log(person);

const hashStringToInt = (s, tableSize) => {
    let hash = 17;
    for (let i = 0; i < s.length; i++) {
        hash = (13 * hash * s.charCodeAt(i)) % tableSize
    }

    return hash;
};

class HashTable {

    table = new Array(100);

    setItem = (key, value) => {
        const idx = hashStringToInt(key, this.table.length)
        this.table[key] = value
    }
    getItem = key => {
        const idx = hashStringToInt(key, this.table.length)
        return this.table[key]
    }
}


const myTable = new HashTable();
myTable.setItem('firstName', 'Bob');

myTable.setItem('lastName', 'Smith');

myTable.setItem('age', 30);

// console.log(myTable.getItem('firstName'));
console.log(myTable.table);
console.table(myTable.table);

//WTF....am I doing....lol

