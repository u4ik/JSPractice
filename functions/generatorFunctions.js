function* generator() {
    console.log('Before log of 1');
    yield 1
    console.log('Before log of 2');
    yield 2
    console.log('Before log of 3');
    yield 3
    console.log('Before log of 4');
    yield 4
};

let generate = generator();

generate.next() //Before log of 1
generate.next() //Before log of 2
generate.next() //Before log of 3
generate.next() //Before log of 4