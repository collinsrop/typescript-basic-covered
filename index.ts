
 let itsSleepTime: boolean = false;
 //intellisense;
 let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let odds = numbers.filter(n=>n%2 !=0);
 
 //tuples
 let user: [number, string] = [12232252, "collins"];
 //enums
 enum Size {Tall, Taller,Tallest};
let MyHeight: Size = Size.Taller;

//functions 

//1)expresion
let getYears = (currentYear: number, yearBorn: number): number =>{
   return currentYear - yearBorn;
}
//console.log(getYears(2024, 2003));

//2)function declaration
function calcYears(born: number): number {
	let now = new Date().getFullYear();
	return now-born;
}
console.log(calcYears(2003));
//type aliases
type Student = {
	id: number,
	name: string,
	DOB: (date: Date) => void,
}
let student1: Student = {
    id: 12,
	name: 'norah',
	DOB: (date: Date) =>{
		console.log(date)
	},
}

//union types
function mToCm(m: number | string): number {
 if (typeof m === 'number')
 return m * 100;
 else
 return parseInt(m) * 100;
}
console.log(mToCm(7)+ 'cm');

//intersection types
type Brake = {
 brake: ()=> void,
}
type Move = {
 move: ()=> void,
}
type Motion  = Brake & Move; 

let movement: Motion = {
	brake: ()=> {},
	move: ()=> {}
}
//LITERAL TYPE
//number
type numbers = 30 | 34;
let mysize: numbers = 30;
//string
type dimension = "m" | "cm";
let mydimension: dimension = "m";

//nullable types
let greet = (name: string | null) =>{
 if (name)
	console.log(name.toUpperCase());
else
    console.log("Hola");
}
console.log(greet(null));



