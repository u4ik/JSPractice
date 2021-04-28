const fetch = require('node-fetch');
const results = () => {

    fetch('https://swapi.dev/api/people/1')
        .then(rest => rest.json())
        .then(json => {
            displayName(json);
            console.log('hello');
        })
        .catch((err) => {
            console.log('Hey you messed up')
        });
};

const results2 = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/people/1');
        const result = await response.json();
        displayResults(result.name);
    } catch (err) {
        console.log(err);
    };
};


results2();

displayName = (data) => {
    console.log(data.name)

};



newFunc();

async function newFunc() {
    // await results();
    console.log('Success in getting Data!');
};

const fetch = require('node-fetch');






const fetch = require('node-fetch');
const fetchFunction = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/people/1');
        const result = await response.json();

        displayResults(result.name);
    } catch (err) {
        console.log(err);
    };

};

fetchFunction();





const displayResults = (name) => {


    console.log(name);

};




const fetch = require('node-fetch');
const results2 = () => {

    fetch('https://swapi.dev/api/people/1')
        .then(stuff => stuff.json())
        .then(json => {

            console.log(json.name);

        }).catch(err => console.log(err));

};
results2();



// Promise.all

const fetch = require('node-fetch');
let swFetch = fetch('https://swapi.dev/api/people/1');
let rmFetch = fetch('https://rickandmortyapi.com/api/character');

Promise.all([swFetch, rmFetch])
    .then(values => {
        return Promise.all(values.map(r => r.json()));
    }).then(([sw, rm]) => {
        console.log(sw.name);
        console.log(rm.results[0].name);
    }).catch(err => console.error(err));

const fetch = require('node-fetch');
let swFetch = fetch('https://swapi.dev/api/people/1');
let rmFetch = fetch('https://rickandmortyapi.com/api/character');

function swFetchFunc() {
    swFetch.then(res => res.json())
        .then(swData => {
            return swData;
        });

};

function rmFetchFunc() {
    rmFetch.then(res => res.json())
        .then(rmData => {
            return rmData;
        });
};

function fetchAll() {
    swFetchFunc();
    rmFetchFunc();
};

fetchAll();



const fetch = require('node-fetch');
const fetchCats = async () => {
    const response = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=dog')
    const result = await response.json();
    console.log(result.text);
};


fetchCats();