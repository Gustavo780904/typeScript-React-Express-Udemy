"use strict";
// 1- arrays
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers[4]);
//numbers = teste
const nomes = ["Gustavo", "Elisa"];
// nomes.push(4);
// 2- Outra sintxe array
const nums = [100, 200, 300];
console.log(nums);
nums.push(150);
console.log(nums);
nums.sort();
console.log(nums);
// 3 - any
const arr = [1, 2, "teste", [], {}, { nome: "gustavo" }];
console.log(arr);
arr.push([true, "", 12]);
//evitar ao maximo!!!
// 4 - Parametros tipados
function soma(a, b) {
    console.log(a + b);
}
;
soma("Gust", "avo");
//soma(4,5); erro!
// 5 - Tipo de retorno de função
function greeting(name) {
    // return 5`;
    return `Olá, ${name}`;
}
console.log(greeting("Gustavo"));
//console.log(greeting(5)); erro!
// 6 - Funçoes anonimas
setTimeout(function () {
    const sallary = 9000;
    // console.log(parseFloat(sallary)); erro!
    //console.log(sallary);
}, 5000);
// 7 -  tipos de objetos
function passCoordinates(coord) {
    console.log("X coord: " + coord.x); // imprime uma string
    console.log("Y coord: ", coord.y); // imprime uma string + numero
}
var objectCoord = { x: 2, y: 3.2 };
passCoordinates(objectCoord);
//é necessário corresponder o nome e o tipo do valor
objectCoord = { x: 2.9, "y": 4.2 };
//aqui tatno faz pssar a chave como string ou não
//objectCoord = {"x": "2.9", "y": 4.2} erro!
// desde qe o valor seja number
objectCoord = { "x": 2.9, "y": 4.2 };
passCoordinates(objectCoord);
const pessoaObj = { nome: "Gustavo", sobrenome: "Luiz" };
function somaNome(pessoaObj) {
    return console.log(pessoaObj.nome + " " + pessoaObj.sobrenome);
}
;
somaNome(pessoaObj);
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log("A: ", a);
    console.log("B: ", b);
    c && console.log("C: ", c);
}
showNumbers(1, 2, 3);
showNumbers(4, 5); //sem ? da erro, pois temos 3 props
// 9 - validando argumentos opcionais
function advancedGreeting(firstName, lastName) {
    lastName ? console.log(`Oi, ${firstName}, ${lastName}, tudo bem?`) : console.log(`Oi, ${firstName}, tudo bem?`);
}
advancedGreeting("Gustavo", "Luiz");
advancedGreeting("Gustavo");
// 10- Union types and
function showBalance(balance) {
    console.log(`O rombo é de ${balance}`);
}
showBalance(500.00);
showBalance("300.00");
showBalance("300" + 400.00);
showBalance("300");
showBalance(700 + 400);
const arr2 = [1, "teste", true];
// 11 - avançando em union type
function showRole(role) {
    typeof role === "boolean" ? console.log("Boolean") : console.log("String: " + role);
}
showRole(false);
showRole("true");
function showRole2(role) {
    if (typeof role === "boolean")
        return "Boolean";
    return "String: " + role;
}
console.log(showRole2(false));
console.log(showRole2("true"));
function showId(id) {
    console.log(`O Id agora é ${id}`);
}
showId(2);
showId("34");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 20,
    z: 30
};
showCoords(coordObj);
const somePerson = { name: "Gustavo", age: 45 };
console.log(somePerson);
// type personType = {
//   name: string
// }
// 15 - Literal tyoes
let test; //testenão poderá receber outro valor que n seja teste 
function showDirection(direction) {
    console.log(direction);
}
showDirection("left");
//showDirection("center") erro
// 16 - non null assertion operators
const h = document.getElementById("some-h");
const p = document.getElementById("some-p");
console.log(p); //a tag inteira é mostrada 
console.log(h?.innerText); //se houver h, improma 
console.log(p?.innerText); //se houver p, improma 
console.log(p.innerText); //se houver p, improma 
// 17 - bigInt
let n;
// n = 2
n = 1000n;
console.log(n); //
console.log(n + 200n);
// 18 - Symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
