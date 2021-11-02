let undef = undefined;
let sk = 10;
let o = {};
let f = function () {};
let str = "tekstas";
let b = true;
let h = [];

let n = null; // reiksme reiskianti "nieko"

console.log(typeof undef);
console.log(typeof sk);
console.log(typeof o);
console.log(typeof f);
console.log(typeof str);
console.log(typeof b);
console.log(typeof h);

console.log(typeof n); //atspausdins "object", bet tai yra tiesiog klaida

// sk = "10";

if (typeof sk === "number") {
    console.log(sk * sk);
}

