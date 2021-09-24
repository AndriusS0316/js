
let rez = 0;
let random = 0;



const skaicius = document.querySelector('.skaicius');
const change = document.querySelector('.change');
const number = document.querySelector('.number');



skaicius.innerText 
number.innerText



let button = document.querySelector('.number');

// let color = ['green', 'blue', 'purple', 'yellow', 'grey', 'teal', 'tomato', 'wheat', 'rosybrown', rgb(238, 238, 238)]

function changeClick() {
    if(random == 0) {
        var buttonColor = 'blue';
        button.style.background = buttonColor;
        
        skaicius.innerText = "vienas";
        number.innerText = 1;
        random = random + 1;
    } else if(random == 1) {
        var buttonColor = 'purple';
        button.style.background = buttonColor;
        
        skaicius.innerText = "du";
        number.innerText = 2;
        random = random + 1;
    } else if(random == 2) {
        var buttonColor = 'yellow';
        button.style.background = buttonColor;
        
        skaicius.innerText = "trys";
        number.innerText = 3;
        random = random + 1;
    } else if(random == 3) {
        var buttonColor = 'grey';
        button.style.background = buttonColor;
        
        skaicius.innerText = "keturi";
        number.innerText = 4;
        random = random + 1;
    } else if(random == 4) {
        var buttonColor = 'teal';
        button.style.background = buttonColor;
        
        skaicius.innerText = "penki";
        number.innerText = 5;
        random = random + 1;
    } else if(random == 5) {
        var buttonColor = 'tomato';
        button.style.background = buttonColor;
        
        skaicius.innerText = "šeši";
        number.innerText = 6;
        random = random + 1;
    } else if(random == 6) {
        var buttonColor = 'wheat';
        button.style.background = buttonColor;
        
        skaicius.innerText = "septyni";
        number.innerText = 7;
        random = random + 1;
    } else if(random == 7) {
        var buttonColor = 'rosybrown';
        button.style.background = buttonColor;
        
        skaicius.innerText = "aštuoni";
        number.innerText = 8;
        random = random + 1;
    } else if(random == 8) {
        var buttonColor = 'rgb(238, 238, 238)';
        button.style.background = buttonColor;
        
        skaicius.innerText = "devyni";
        number.innerText = 9;
        random = random + 1;
    } else if(random == 9) {
        var buttonColor = 'green';
        button.style.background = buttonColor;
        
        skaicius.innerText = "nulis";
        number.innerText = 0;
        random = 0;
    }
}

// let color = ['green', 'blue', 'purple', 'yellow', 'grey', 'teal', 'tomato', 'wheat', 'rosybrown', rgb(238, 238, 238)]

let container = document.querySelector('.body');

function numberClick() {
    if(random == 0) {
        var randomColor = 'green';
        container.style.background = randomColor;

        console.log(0);
    } else if(random == 1) {
        var randomColor = 'blue';
        container.style.background = randomColor;
        
        console.log(1);
    } else if(random == 2) {
        var randomColor = 'purple';
        container.style.background = randomColor;
        
        console.log(2);
    } else if(random == 3) {
        var randomColor = 'yellow';
        container.style.background = randomColor;
        
        console.log(3);
    } else if(random == 4) {
        var randomColor = 'grey';
        container.style.background = randomColor;
        
        console.log(4);
    } else if(random == 5) {
        var randomColor = 'teal';
        container.style.background = randomColor;
        
        console.log(5);
    } else if(random == 6) {
        var randomColor = 'tomato';
        container.style.background = randomColor;
        
        console.log(6);
    } else if(random == 7) {
        var randomColor = 'wheat';
        container.style.background = randomColor;
        
        console.log(7);
    } else if(random == 8) {
        var randomColor = 'rosybrown';
        container.style.background = randomColor;
        
        console.log(8);
    } else if(random == 9) {
        var randomColor = '#eee';
        container.style.background = randomColor;
        
        console.log(9);
    }
}



change.addEventListener('click', changeClick);

number.addEventListener('click', numberClick);

skaicius.addEventListener('click', skaiciusClick);