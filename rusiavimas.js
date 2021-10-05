"use strict";

let m = [5, 87, -5, 3, -4, 107];

/*
    0   1  2   3   4   5
m: -5, -4, 3,  5,  87, 107
m.length: 6
*/

for (let i = 0; i < m.length - 1; i++) {
    for (let j = i + 1; j < m.length; j++) {
        if (m[i] > m[j]) {
            let tmp = m[i];
            m[i] = m[j];
            m[j] = tmp;
        }
    }
}
console.log(m);

for (let i = 0; i < m.length - 1; i++) {
    for (let j = i + 1; j < m.length; j++) {
        if (m[i] < m[j]) {
            let tmp = m[i];
            m[i] = m[j];
            m[j] = tmp;
        }
    }
}
console.log(m);




