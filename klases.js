"use strict"; 

class Puodukas {

    constructor(spalva, maxTuris) {
        this.spalva = spalva;
        this.kiekis = 0;
        this.maxTuris = maxTuris;
    }

    ipilk(kiek) {
        if (kiek <= 0) {
            console.log("Ar zinai, ka darai?");
            return;
        }
        this.kiekis += kiek;
        if (this.kiekis > this.maxTuris) {
            console.log("Ant kelniu issipyle " + (this.kiekis - this.maxTuris));
            this.kiekis = this.maxTuris;
        } else {
            console.log("Sekmingai ipylem " + kiek + ". Liko laisvos vietos: " + (this.maxTuris - this.kiekis));
        }
    }

    isgerk(kiek) {
        if (kiek < 0) {
            console.log("Nespjaudyk i puoduka");
            return;
        }
        if (kiek === 0) {
            console.log("Tai gersim, ar akis vartysim?");
            return;
        }
        this.kiekis -= kiek;
        if (this.kiekis < 0) {
            console.log("Isgerem tik " + (this.kiekis + kiek));
            this.kiekis = 0;
        } else {
            console.log("Sekmingai isgerem " + kiek + ". Liko gerimo: " + this.kiekis);
        }
    }
}

class Termosas extends Puodukas {

    constructor(spalva, maxTuris) {
        super(spalva, maxTuris); //sita ir eilute zemiau yra vienodos
        //Puodukas.call(this, spalva, maxTuris);
        this.temp = 20;
    }

    pasildyk(kiek) {
        this.temp += kiek;
    }

    atvesink(kiek) {
        this.temp -= kiek;
    }
    
    isgerk(kiek) {
    console.log("pilam i termosa");
        super.ipilk(kiek)
        // if (kiek <= 0) {
        //     console.log("Ar zinai, ka darai?");
        //     return;
        // }
        // this.kiekis += kiek;
        // if (this.kiekis > this.maxTuris) {
        //     console.log("Ant kelniu issipyle " + (this.kiekis - this.maxTuris));
        //     this.kiekis = this.maxTuris;
        // } else {
        //     console.log("Sekmingai ipylem " + kiek + ". Liko laisvos vietos: " + (this.maxTuris - this.kiekis));
        // }
        this.temp -= 5;
    }
}

function Puodukas1 (spalva, maxTuris) {
    this.spalva = spalva;
    this.kiekis = 0;
    this.maxTuris = maxTuris;
}

let p = new Puodukas("Baltas", 150);
// let p1 = new Puodukas("Baltas", 150);
let t = new Termosas("Zalias", 1000);

t.ipilk(555);
console.log(t);
t.isgerk(200);
console.log(t);

console.log(p);
p.ipilk(-100);
// console.log(p1);



let o = t;


// o = {
//     spalva: "juodas",
//     kiekis: 20,
//     maxTuris: 500
// }

if (o instanceof Puodukas) {
    o.ipilk(12);
    if (o instanceof Termosas) {
        o.pasildyk(23);
    }
}

console.log(o);

if (o instanceof Object) {
    console.log("tai objektas");
}