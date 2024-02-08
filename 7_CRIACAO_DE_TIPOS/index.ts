// 1 Generics
function showGenericsData<T>(arg: T): string {
  return `O dado é ${arg}`
}

console.log(showGenericsData(5))
console.log(showGenericsData('Testando generic'))
console.log(showGenericsData(true))
console.log(showGenericsData([]))
console.log(showGenericsData(['teste']))

// 2 - Constrains em generic

function showProductName<T extends{name: string}>(obj: T){
  return `O nome do produto é ${obj.name}`
}
const myObj = { name: "Porta", cor: 'Branco'}
const otherProduct = { name: "Carro", whells: 4}
const thirdObj = { number: 4}

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))
//console.log(showProductName(thirdObj))

//3 generics com interface

interface MyObject<T, U, Q> {
  name: string;
  whells: T;
  engine: U;
  color: Q;
}
type Car = MyObject<number, number, string>
type Pen = MyObject<null, null, string>

const myCar: Car = {
  name: 'BMW',
  whells: 4,
  engine: 4.1,
  color: 'branco'
}
const myPenr: Pen = {
  name: 'BIC',
  whells: null,
  engine: null,
  color: 'azul'
}
console.log(myCar)
console.log(myPenr)

// 4 - type parameters
/* Implicit conversion of a 'symbol' to a 'string' will fail at runtime. Consider wrapping this expression in 'String(...)'.ts(2731)
(parameter) key: K extends keyof T */
/* é possível que o TypeScript esteja alertando sobre a possibilidade de um símbolo ser usado diretamente em uma template string.
Você pode corrigir isso fazendo uma conversão explícita para string dentro da template string */

function getSomeKey<T, K extends keyof T, Q extends keyof T>(obj: T, key: K, chave: Q){
  return `A chave ${String(key)} está no objeto e seu valor é ${obj[key]} e a chave ${String(chave)} é ${obj[chave]}` 
}

const server = {
  hd: '2TB',
  ram: '32GB'
}
console.log(getSomeKey(server, 'hd', 'ram'))

// 6 - typeof type operator

const username: string = 'Gustavo'
const username2: typeof username = 'Elisa'
// const  username3: typeof username = 4

// 7 -  indexed access type

type Truck = {km: number, kg: number, description: string}

type Km = Truck['km']

const newTruck: Truck = {km: 100000, kg: 5000, description: 'Caminhão demais pra pouca carga'}

function showKm (km: Km) {
  console.log(`O veículo tem a km de ${km}`)
}

showKm(newTruck.km)

const newCar = {
  km: 5000,
  kg: 1000
}
showKm(newCar.km)

// 8 - conditional expressions type

interface A {}
interface B extends A {}
interface C {
  showName():string
}

type myType = B extends A ? number : string

const someVar:myType = 5
// const anotherVar:myType = 'teste'

type myTypeB = C extends {showNumber():number} ? number : boolean

const anotherVar:myTypeB = true
const anotherVar2:myTypeB = false

// 9 - template literals type

type testA = 'text'
type CustomType  = `some ${testA}`

const testing: CustomType = "some text"

type a1 = 'testando'
type a2 = 'union'

type a3 = `${a1}` | `${a2}`

const test1: a3 = 'testando'
const test2: a3 = 'union'