import desafio2 from "./desafio2.js";
//1 - number
let z: number = 10;

//z =  "teste"
console.log(z);

let y: number = 5.88948484;

console.log(y);

console.log(y.toPrecision(4));

//2 - string

const firstName: string = "Gustavo";

console.log(firstName);
console.log(firstName.toUpperCase());

let fullName: string;

const lastName: string = "Luiz"

fullName = firstName + " " + lastName + " " + z;

console.log(fullName);
console.log(typeof fullName);

//3 - boolean

//const a: boolean = true;
// a = false

let a: boolean = true;
console.log(a);
a = false;
console.log(a);

//4 - inference e annotation

let ann: string = "teste"

let inf = "teste"

//inf = 1

desafio2(2);

console.log(typeof(desafio2(2)));
