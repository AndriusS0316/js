"use strict"

// obijektai

let puodukas = {
    turis: 300,
    kiekis: 200,
    spalva: "rudas"
};

console.log(puodukas.gerimas);

puodukas.gerimas = "kava";

console.log(puodukas);

delete puodukas.spalva;

console.log(puodukas);

let savybe = "turis";

console.log(puodukas.medziaga);

console.log(puodukas[savybe]);

//abi eilutes daro ta pati. Savybes pakeitimas.
puodukas ["kiekis"] = 20;
puodukas.kiekis = 20; 

console.log(puodukas);

puodukas ["medziaga"] = "stiklas";

console.log(puodukas);
console.log(puodukas);
console.log(puodukas);

// let tasPatsPuodukas = puodukas;

// puodukas.kiekis -= 50;

// tasPatsPuodukas.spalva = "zalia"

// console.log(puodukas.kiekis);
// console.log(puodukas.spalva);
// console.log(puodukas.spalva);

// tasPatsPuodukas.kiekis += 100;

// console.log(puodukas.kiekis);


// //console.log(puodukas);


// // palyginimo operatoriai

// if (puodukas === tasPatsPuodukas) {
//     console.log("tas pats puodukas");
// } else {
//     console.log("kitas objekas");
// }