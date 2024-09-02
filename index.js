"use strict";
let itsSleepTime = false;
//intellisense;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odds = numbers.filter(n => n % 2 != 0);
//tuples
let user = [12232252, "collins"];
//enums
var Size;
(function (Size) {
    Size[Size["Tall"] = 0] = "Tall";
    Size[Size["Taller"] = 1] = "Taller";
    Size[Size["Tallest"] = 2] = "Tallest";
})(Size || (Size = {}));
;
let MyHeight = Size.Taller;
//functions 
//1)expresion
let getYears = (currentYear, yearBorn) => {
    return currentYear - yearBorn;
};
//console.log(getYears(2024, 2003));
//2)function declaration
function calcYears(born) {
    let now = new Date().getFullYear();
    return now - born;
}
console.log(calcYears(2003));
let student1 = {
    id: 12,
    name: 'norah',
    DOB: (date) => {
        console.log(date);
    },
};
//union types
function mToCm(m) {
    if (typeof m === 'number')
        return m * 100;
    else
        return parseInt(m) * 100;
}
console.log(mToCm(7) + 'cm');
let movement = {
    brake: () => { },
    move: () => { }
};
let mysize = 30;
let mydimension = "m";
//nullable types
let greet = (name) => {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola");
};
console.log(greet(null));
