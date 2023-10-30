"use strict";
// 1 - void
function withoutReturn() {
    console.log('Essa função não tem retorno!');
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Olá, ${name}`;
}
function preGreeting(f, userName) {
    console.log("preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Elisa");
// 3 - generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 2, false]));
console.log(firstElement([true, 2, 3]));
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObjects({ name: "Gustavo" }, { age: 45, job: "cangaceiro" });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b)
        biggest = a;
    else
        biggest = b;
    return biggest;
}
console.log(biggestNumber(5, 3));
// console.log(biggestNumber("12",3)); erro
console.log(biggestNumber("12", "73"));
// 5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([1, 2, 3], ["4", "5", "6"]));
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet)
        return `Olá ${greet} ${name}, tud bem?`;
    return `Olá ${name}, tud bem?`;
}
console.log(modernGreeting("Gustavo"));
console.log(modernGreeting("Gustavo", "Exmo Magn Sr Dr"));
// 7 - parametros default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 12));
console.log(somaDefault(15, 12));
// 8 - unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number")
        console.log(`x é um numero`);
}
doSomething([1, 2, 3]);
doSomething(5);
// 9 - never
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("Algo saiu errado")
// 10 - Rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(150, 50, 100));
// 11 - destruturing como parametro
function showProdctDetails({ name, price }) {
    return `O nome do produto é ${name} o o valor é R$${price},00.`;
}
const shirt = {
    name: "Camisa",
    price: 300
};
console.group(showProdctDetails(shirt));
