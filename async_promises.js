const fetch = require('node-fetch');

fetch('https://api.nasa.gov/insight_weather/?api_key=EUgijo5Du7IBTWLZJ1E3fMhb8PCnVbvuHKoerj7T&feedtype=json&ver=1.0')

    .then(res => res.json())
    .then(json => console.log(json))


const newFunc = (flag) => {
    // await results();
    console.log('Success in getting Data!', flag);
};
//.thens
const results = () => {
    fetch('https://swapi.dev/api/people/1')
        .then(rest => rest.json())
        .then(json => {
            displayName(json, '.then()');
            newFunc('.then()');
        })
        .catch((err) => {
            console.log('Hey you messed up')
        });
};

//Async
const results2 = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/people/1');
        const result = await response.json();
        displayName(result, 'async');
        newFunc('async');
    } catch (err) {
        console.log(err);
    };
};

const displayName = (data, flag) => {
    console.log(data.name, flag)
};
// results();
// results2();


// Promise.all


let swFetch = fetch('https://swapi.dev/api/people/1');
let rmFetch = fetch('https://rickandmortyapi.com/api/character');

const promiseAllFetch = () => {
    Promise.all([swFetch, rmFetch])
        .then(values => {
            return Promise.all(values.map(r => r.json()));
        }).then(([sw, rm]) => {
            console.log(sw.name);
            console.log(rm.results[0].name);
        }).catch(err => console.error(err));
};

// promiseAllFetch();



function swFetchFunc() {
    fetch('https://swapi.dev/api/people/1').then(res => res.json())
        .then(swData => {
            return swData;
        });

};

function rmFetchFunc() {
    fetch('https://rickandmortyapi.com/api/character').then(res => res.json())
        .then(rmData => {
            return rmData;
        });
};

function fetchAll() {
    swFetchFunc();
    rmFetchFunc();
};

// fetchAll();


const codeBlocker = () => {
    //! Slow!
    // let i = 0;
    // while (i < 1000000000) { i++ };
    // return 'Loops Done!'

    //! Close, but no cigar, still slow!
    new Promise((resolve, reject) => {
        let i = 0;
        while (i < 1000000000) { i++ };
        return resolve('Loops Done!')
    })

    //! Speedy boi!!!!



    // return Promise.resolve('Loop is done').then((data) => {
    //     let i = 0;
    //     while (i < 1000000000) { i++ }

    // })
};


const tick = Date.now();
const log = v => console.log(`${v} Elapsed: ${Date.now() - tick}ms`);
// log('Synchronous Start');
// log(codeBlocker());
// log('Synchronous End');

const getFruit1 = async (name) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    };
    let i = 0;
    while (i < 1000000000) { i++ }
    //Having async will pretty much wrap the return in a promise resolve
    return fruits[name]
};
//? OR
const getFruit2 = (name) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    };
    let i = 0;
    while (i < 1000000000) { i++ }
    return Promise.resolve(fruits[name])
};
log('Get fruit 1');
getFruit1('strawberry').then((fruit) => log(fruit));
log('Get fruit 1 End');

log('Get fruit 2');
getFruit2('peach').then(fruit => log(fruit));
log('Get fruit 2 End');



const makeSmoothie = async () => {
    const a = await getFruit('pineapple');
    const b = await getFruit1('strawberry');

    return [a, b];
};

// makeSmoothie().then(console.log)

//? VS: 

const makeSmoothie2 = () => {
    let holder;
    return getFruit('strawberry')
        .then(fruit1 => {
            holder = fruit1
            return getFruit('pineapple')
        })
        .then(fruit2 => [fruit2, holder])
};

// makeSmoothie2().then(console.log)

//? Promise.all async
// -Allows the fetching to occur concurrently or at the same time.
const makeSmoothie3 = async () => {
    const a = getFruit('pineapple');
    const b = getFruit1('strawberry');
    const smoothie = await Promise.all([a, b])
    return smoothie;
};

// makeSmoothie3().then(console.log)

//? Loop promise

const fruits = ['peach', 'pineapple', 'strawberry'];
const smoothie = fruits.map(fruit => getFruit(fruit));

const fruitLoop = async () => {
    for await (const emoji of smoothie) {
        log(emoji)
    }
};

// fruitLoop();


const fruitInspection = async () => {
    if (await getFruit('peach') === '🍑') {
        console.log('Looks peachy!');
    };
};

fruitInspection();


