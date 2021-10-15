"use strict";

let p = new Promise((resolve, reject) => {
    console.log("start promise function");
    setTimeout(() => {
        if (Math.random() < 0.5) {
            console.log("resolving promise");
            resolve("resolve value");
        } else {
            console.log("rejecting promise");
            reject("reject value");
        }
    }, 10);
    
    console.log("finish promise function");
});

// promiso buna trys busenos: pending kai sukurem; resolved; rejected. 

p.then(
    value => {
        console.log("promise was resolved with value " + value);
    },
    reason => {
        console.log("promise was rejected with value " + reason);
    }
);

console.log("program finished");

// funkcija "catch" yra tokia pati, kaip funkcija su pirmu parametru "null". Tuomet daro tarsi antra parametra. 