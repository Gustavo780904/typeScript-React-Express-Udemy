// 1 = tipo de objeto para função com interface para

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}
function showProductsDetails(product: Product): void {
  console.log(`Produto: ${product.name}, Preço: ${product.price}`);
  if (product.isAvailable)
    console.log(`Produto disponível`);
  else
    console.log(`Produto indisponível`);
}

const shirt: Product = {
  name: "camisa",
  price: 40.35,
  isAvailable: false
}
const tShirt: Product = {
  name: "camiseta",
  price: 52.35,
  isAvailable: true
}
showProductsDetails(shirt);
showProductsDetails(tShirt);

// 2 - Propriedade opcional em interface

interface User {
  email: string
  role?: string
}
function showUserDetails(user: User): void {
  console.log(`Email: ${user.email}`)
  user.role ? console.log(`Cargo: ${user.role}`) : console.log(`Cargo ainda não definido`)
}
const u1: User = {
  email: 'foo@example.com',
  role: 'admin'
}
const u2: User = {
  email: 'foo@example.com',
  role: ''
}
showUserDetails(u1)
showUserDetails(u2)

// 3 - Readonly

interface Car {
  brand: string,
  readonly wheels: number
}

const fusca: Car = {
  brand: 'VW',
  wheels: 4
}
console.log(fusca.wheels)
// fusca.wheels = 3

// 4 - index signature

interface CoordObject {
  [index: string]: number
}
let coords: CoordObject = {
  x: 10
}
coords.y = 15

console.log(coords)

// 5 - Extending interfaces

interface Human {
  name: string,
  age: number
}

interface SuperHuman extends Human {
  superpowers: string[]
}
const gustavo: Human = {
  name: 'Gustavo',
  age: 45
}
console.log(gustavo)

const goku: SuperHuman = {
  name: 'Goku',
  age: 50,
  superpowers: ["kamehameha", "Genki Dama"]
}
console.log(goku)
console.log(goku.superpowers[1])

// 6 - intersection types
interface Character {
  name: string
}

interface Gun {
  type: string
  caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name: 'Arnold',
  type: 'Shotgun',
  caliber: 12
}
console.log(arnold)

// 7 - Readonly array

let myArray: ReadonlyArray<string> = ['maça', 'banana', 'laranja']

//myArray[3] = 'uva'
console.log(myArray)
myArray.forEach((item, index)=>{
  console.log("Fruta ",  index +1 ," = "+ item)
})

myArray = myArray.map((item)=>{
  return `Fruta: ${item}`
})

console.log(myArray)

// 8 - tuplas

type fiveNumbers = [number,number,number,number,number]

const myNumberArray:fiveNumbers = [1,2,3,4,5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser:nameAndAge = ["Gustavo", 45]
console.log(anotherUser)


// 9 - tuplas com readonly

function showNumbers(numbers: readonly [number, number]){
  //numbers[1] = 8 erro ao tentar mudar
  console.log(numbers[0])
  console.log(numbers[1])
}

showNumbers([3,5])