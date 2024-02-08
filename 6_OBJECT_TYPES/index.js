"use strict";
// 1 = tipo de objeto para função com interface para
function showProductsDetails(product) {
    console.log(`Produto: ${product.name}, Preço: ${product.price}`);
    if (product.isAvailable)
        console.log(`Produto disponível`);
    else
        console.log(`Produto indisponível`);
}
const shirt = {
    name: "camisa",
    price: 40.35,
    isAvailable: false
};
const tShirt = {
    name: "camiseta",
    price: 52.35,
    isAvailable: true
};
showProductsDetails(shirt);
showProductsDetails(tShirt);
function showUserDetails(user) {
    console.log(`Email: ${user.email}`);
    user.role ? console.log(`Cargo: ${user.role}`) : console.log(`Cargo ainda não definido`);
}
const u1 = {
    email: 'foo@example.com',
    role: 'admin'
};
const u2 = {
    email: 'foo@example.com',
    role: ''
};
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: 'VW',
    wheels: 4
};
console.log(fusca.wheels);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const gustavo = {
    name: 'Gustavo',
    age: 45
};
console.log(gustavo);
const goku = {
    name: 'Goku',
    age: 50,
    superpowers: ["kamehameha", "Genki Dama"]
};
console.log(goku);
console.log(goku.superpowers[1]);
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
};
console.log(arnold);
// 7 - Readonly array
let myArray = ['maça', 'banana', 'laranja'];
//myArray[3] = 'uva'
console.log(myArray);
myArray.forEach((item, index) => {
    console.log("Fruta ", index + 1, " = " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
const anotherUser = ["Gustavo", 45];
console.log(anotherUser);
// 9 - tuplas com readonly
function showNumbers(numbers) {
    //numbers[1] = 8 erro ao tentar mudar
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([3, 5]);
