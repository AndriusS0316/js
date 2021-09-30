



const suma = (a, b) => {
    return a + b;
} // abi funkcijos yra identiskos 

const suma1 = (a, b) => a + b; // abi funkcijos yra identiskos 

const kvadratas = (a) => a * a; //jei yra vienas parametras, galima nerasyti skliausteliu. Siuo atveju "a" gali buti neapskliausta. Va taip "const kvadratas = a => a * a;"

const atsitiktinis = () => {
    let sk = Math.random() * 10 + 1;
    sk = Math.floor(sk);
    return sk;
} // jei arrow funkcija parametru neturi, tuomet turim rasyti tuscius skliaustelius. 

const labas = (vardas, pavarde) => {
    console.log("labas");
    console.log(vardas);
    console.log(pavarde);
    console.log("kaip tau sekasi");
}

console.log(suma(2, 3));
console.log(suma1(2, 3));
console.log(kvadratas(5));
console.log(atsitiktinis());

labas("Jonas", "Jonaitis");




let m = [3, 6, 2, 3, 7, 1, -5, 2];

console.log(m);

m.sort((e1, e2) => e1 - e2);

console.log(m);


let m4 = ["askldj", "sdfs", "sdfgsdfgs", "sd", "werwerwe"]; 

console.log(m4); 

m.sort((e1, e2) => e2.length - e1.length); console.log(m4);


(() => {
    console.log("labas pasauli");
})();