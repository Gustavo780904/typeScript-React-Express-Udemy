"use strict";
// 1 Generics
function showGenericsData(arg) {
    return `O dado é ${arg}`;
}
console.log(showGenericsData(5));
console.log(showGenericsData('Testando generic'));
console.log(showGenericsData(true));
console.log(showGenericsData([]));
console.log(showGenericsData(['teste']));
// 2 - Constrains em generic
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const myObj = { name: "Porta", cor: 'Branco' };
const otherProduct = { name: "Carro", whells: 4 };
const thirdObj = { number: 4 };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = {
    name: 'BMW',
    whells: 4,
    engine: 4.1,
    color: 'branco'
};
const myPenr = {
    name: 'BIC',
    whells: null,
    engine: null,
    color: 'azul'
};
console.log(myCar);
console.log(myPenr);
// 4 - type parameters
/* Implicit conversion of a 'symbol' to a 'string' will fail at runtime. Consider wrapping this expression in 'String(...)'.ts(2731)
(parameter) key: K extends keyof T */
/* é possível que o TypeScript esteja alertando sobre a possibilidade de um símbolo ser usado diretamente em uma template string.
Você pode corrigir isso fazendo uma conversão explícita para string dentro da template string */
function getSomeKey(obj, key, chave) {
    return `A chave ${String(key)} está no objeto e seu valor é ${obj[key]} e a chave ${String(chave)} é ${obj[chave]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'hd', 'ram'));
// 6 - typeof type operator
const username = 'Gustavo';
const username2 = 'Elisa';
const newTruck = { km: 100000, kg: 5000, description: 'Caminhão demais pra pouca carga' };
function showKm(km) {
    console.log(`O veículo tem a km de ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
const someVar = 5;
const anotherVar = true;
const anotherVar2 = false;
const testing = "some text";
const test1 = 'testando';
const test2 = 'union';
