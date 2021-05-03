const pikachu = { name: 'Pikachu' };
const stats = { hp: 50, attack: 20, defense: 40, type: 'Electric ⚡' };


//! Bad Code:

// pikachu['hp'] = stats.hp;

//OR

// const pika1 = Object.assign(pikachu, stats)
// const pika2 = Object.assign(pikachu, {attack: 20, defense:40 });


//? Good Code:

const pika = { ...pikachu, ...stats };

console.log(pika);

//Arrays

let pokemon = ['Arbok', 'Raichu', 'Weedle'];
pokemon = [...pokemon,'Pikachu', 'Bulbasaur'];

console.log(pokemon);