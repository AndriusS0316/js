"use strict";

let kamuoliukai = [3, 5.4, 2.3, 4.9, 0.1, 0.23];

for (let i = 0; i < kamuoliukai.length - 1; i++) {
    for (let j = i + 1; j < kamuoliukai.length; j++) {
        if (kamuoliukai[i] > kamuoliukai[j]) {
            let tmp = kamuoliukai[i];
            kamuoliukai[i] = kamuoliukai[j];
            kamuoliukai[j] = tmp;
        }
    }
}


let kamuoliukai1 = [3, 5.4, 2.3, 4.9, 0.1, 0.23];
for (let i = 0; i < kamuoliukai.length; i++) {
    console.log(turis(kamuoliukai[i]));
}
function turis(r) {
    let t = 4 * 3.14 * r * r * r / 3;
    return t;
}




function didesnisSk(puokste) {
    let max = puokste[0];
    for (let x = 1; x < puokste.length; x++) {
        if (puokste[x] > max) {
            max = puokste[x];
        }
    }
    return max;
}

let m1 = [1, 2, 3, 4, 5];

console.log(didesnisSk(m1));

let bubu = [65, 78, -2, 4, 7];

console.log(didesnisSk(bubu));

let meme = [165, 8, 2, -4, 17];

console.log(didesnisSk(meme));

let oj = [65, 45, 11];

console.log(didesnisSk(oj));

let ah = [0.1, 0.2, -1.2];

console.log(didesnisSk(ah));

let qq = [1, 1, 1, 1, 1];

console.log(didesnisSk(qq));

function vardas(bnm) {
let suma = 0;
for (let x = 0; x < bnm.length; x++) {
    suma = bnm[x] + suma;
}
let vidurkis1 = suma / bnm.length;
return vidurkis1;
}

console.log(vardas(oj));
console.log(vardas(ah));
console.log(vardas(meme));
console.log(vardas(bubu));
console.log(vardas(m1));
console.log(vardas(qq));



// faktorialas 
// kai funkcija kviecia pati save tuomet vadinama rekursija

function faktorialas(sk) {
    if (sk < 0) {
        return -1;
    }
    if (sk === 0) {
        return 1;
    }
    let f = sk * faktorialas(sk - 1);
    return f;
}

console.log(faktorialas(4));
console.log(faktorialas(7));
console.log(faktorialas(-10));

function labas(vardas, pavarde) {
    console.log("labas, " + vardas + " " + pavarde);
}

labas("Jonas", "Jonaitis"); 
labas("Petras", "Petraitis"); 
labas("Antanas"); 
labas();
labas("Jonas", "Petraitis", 10, "!", false);


typeof 
/*
reiksmes, kurias grazina "typeof" kintamasis
undefined
number
string
function
symbol
boolean
*/

function suma(a, b) {
    return a + b;
}

function sandauga(sk4, sk44) {
    return sk4 * sk44;
}

function atimtis(s1, s2) {
    return s1 - s2;
}

function skaiciuotuvas (pirmas, antras, veiksmas) {
    if (typeof veiksmas === "function") {
        return veiksmas(pirmas, antras);  
    } else {
        console.log("nezinomas veiksmas");
    }
    return undefined;
}

// suma = atimtis; 

let dalyba = function (a, b) { //sita funkcija neturi vardo kartais galima rasti pavadinta anonimiine funkcija.
    return a / b;
};

// dalyba = 7;

dalyba = 7;
console.log(typeof dalyba);
console.log(skaiciuotuvas(2, 3, suma));
console.log(skaiciuotuvas(2, 3, sandauga));
console.log(skaiciuotuvas(2, 3, dalyba));


let puodukas = {
    turis: 300,
    kiekie: 100,
    gerimas: "arbata"
};





function suma (a, b, c) {
    arguments 
    let s = 0;
    if (typeof a === "number") {
        s += a;
    }
    if (typeof b === "number") {
        s += b;
    }
    if (typeof c === "number") {
        s += c;
    }
    return s;
}

console.log(suma(1, 2, 3));
console.log(suma(1, 2));
console.log(suma(1));


function suma() {
    let s = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "number") {
            s += arguments[i];
        }
    }
    return s;
}



function pasisveikinimas (vardas = "bevardis", pavarde = "bepavardis") {
    console.log(arguments);
    let str = "labas " + pavarde + " " + vardas;
    if (arguments.length > 2) {
        str += " titulai:"
    }
    for (let i = 2; i < arguments.length; i++) {
        str += " " + arguments[i];
    }
    console.log(str);
}

pasisveikinimas("Jonas", "Jonaitis"); 
pasisveikinimas("Jonas", "Jonaitis", "Imperatorius"); 
pasisveikinimas("Jonas", "Jonaitis", "Imperatorius", "caras", "valdovas"); 
pasisveikinimas(undefined, null, "Imperatorius", "caras", "valdovas"); 



function pasisveikinimas1(zmogus) {
    console.log("labas" + zmogus.vardas + " " + zmogus.pavarde);
    zmogus.jauPasveikintas = true;
}

pasisveikinimas1({
    vardas: "Jonas",
    pavarde: "Jonaitis"
});

let z = {
    vardas: "Jonas",
    pavarde: "Jonaitis"
}

console.log(z);
pasisveikinimas1(z)
console.log(z);



function skaiciai(sk) {
    sk = sk * sk;
    console.log(sk);
}
let s = 10;
skaiciai(s);
console.log(s);



