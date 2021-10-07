"use strict";

// darbas sudeti visas savybes skirtas naujam objektui 
function Masina(pavadinimas) {
    this.pavadinimas = pavadinimas;
    this.kelias = 0;
    this.greitis = 0;
    this.gazas = function (kiek) {
        this.greitis += kiek;
    };
    this.stabdis = function (kiek) {
        this.greitis -= kiek;
        if (this.greitis < 0) {
            this.greitis = 0;
        }
    };
}

// specialusis objektas new sukuria nauja objekta, paleisti funkcija ir tos funkcijos 

let masina1 = new Masina("pirma");
let masina2 = new Masina("antra");

console.log(masina1);
console.log(masina2);

masina1.gazas(15);
masina2.gazas(3);

console.log(masina1);
console.log(masina2);

// this dar yra vadinamas kontekstiniu kintamuoju. 