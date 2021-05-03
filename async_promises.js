const fetch = require('node-fetch');

const newFunc = (flag) =>  {
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
results();
results2();


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