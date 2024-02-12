// 1 - Campos em classe

class User {
  name!: string;
  age!: number;
}

const gustavo = new User()

console.log(gustavo)

gustavo.name = "Gustavo"
gustavo.age = 45
// gustavo.job = "Desenvolvedor" (não tem essa prop)

console.log(gustavo)

// 2 - Constructor

class NewUser {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
const joao = new NewUser("João", 22)

console.log(joao)
console.log(joao.name)
// const pedro = new NewUser("Pedro")

// 3 - Campos readonly

class Car {
  name
  readonly wheels = 4

  constructor(name: string) {
    this.name = name
  }
}

const fusca = new Car("Fusca")

console.log(fusca)
console.log(fusca.wheels)

fusca.name = "Fusca Turbo"

// fusca.wheels = 5
console.log(fusca)

// 4 - Heranca e super

class Machine {
  name

  constructor(name: string) {
    this.name = name
  }
}
const trator = new Machine("Trator")

class MachineGun extends Machine {
  guns
  constructor(name: string, guns: number) {
    super(name)
    this.guns = guns
  }
}
const destroyer = new MachineGun("Destroyer", 4)

console.log(trator)
console.log(destroyer)

// 5 - métodos

class Dwarf {
  name

  constructor(name: string) {
    this.name = name
  }
  greeting() {
    console.log("Hey Stranger!")
  }
}
const jimmy = new Dwarf("Jimmy")
console.log(jimmy.name)

jimmy.greeting()
console.log(jimmy)

// 6 - o This

class Truck {
  model
  hp

  constructor(model: string, hp: number) {
    this.model = model
    this.hp = hp
  }
  showDetails() {
    console.log(`Caminhão do modelo ${this.model} tem ${this.hp} hp de potência`)
  }
}

const volvo = new Truck("Volvo", 400)
const scania = new Truck("Scani", 500)

volvo.showDetails()
scania.showDetails()

// 7 - getters

class Person {
  name
  surname

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }
  get fullName() {
    return this.name + " " + this.surname
  }
}

const gustavoLuiz = new Person('Gustavo', 'Luiz')
console.log(gustavoLuiz.name)
console.log(gustavoLuiz.fullName)

// 8 -Setters

class Coords {
  x!: number;
  y!: number;

  set fillx(x: number) {
    if (x === 0) {
      console.log(`X = 0 é impossível`)
      return
    }
    this.x = x
    console.log(`X = ${this.x}, inserido com sucesso!`)
  }

  set filly(y: number) {
    if (y === 0) {
      console.log(`Y = 0 é impossível`)
      return
    }
    this.y = y
    console.log(`Y = ${this.y}, inserido com sucesso!`)
  }

  get getCoords() {
    return `X: ${this.x} e Y: ${this.y}`
  }
}

const myCoords = new Coords()

myCoords.fillx = 15
myCoords.filly = 0

console.log(myCoords)

myCoords.filly = 42
console.log(myCoords)

// 9 - implements

interface showTitle {
  itemTitle(): string
}

class BlogPost implements showTitle {
  title
  constructor(title: string) {
    this.title = title
  }
  itemTitle() {
    return `O título do post é: ${this.title}`
  }
}

const myPost = new BlogPost("Hello, world!")

console.log(myPost.itemTitle())

class TestingInterface implements showTitle {
  title
  constructor(title: string) {
    this.title = title
  }
  itemTitle() {
    return `O título do post é: ${this.title}`
  }
}

// 10 - Override de métodos

class Base {
  someMethod() {
    console.log("Alguma coisa")
  }
}
class Nova {
  someMethod() {
    console.log("Mais alguma coisa")
  }
}

const myObject = new Nova()

myObject.someMethod()

// 11 -  public

class C {
  public x = 11
}
class D extends C {

}
const cInstance = new C()

console.log(cInstance.x)

const dInstance = new D()

console.log(dInstance.x)

// 12 - protected

class E {
  protected x = 10
  protected protectedMethod() {
    console.log('Este método é protegido')
  }
}

class F extends E {
  showX() {
    console.log('X: ' + this.x)
  }
  showProtectedMethod(){
    this.protectedMethod()
  }
}

const fInstance = new F()

// console.log(fInstance.x)
fInstance.showX()
fInstance.showProtectedMethod()

// 13 - private

class PrivateClass {
    private name = 'Private'  
    showName(){
      return this.name
    }
    private privateMethod(){
      console.log('Metodo privado')
    }
    showPrivateMethod(){
      this.privateMethod()
    }
}

const pObj = new PrivateClass()

// console.log(pObj.name)
console.log(pObj.showName())
// console.log(pObj.privateMethod())
pObj.showPrivateMethod()

/* class TestingPrivate extends PrivateClass {
  myMethod(){
    this.privateMethod()
  }
}
 */

// 14 - Static members
class StaticMembers {
  static prop = 'Teste static'
  static staticMethod(){
    console.log(this.prop + ' method')
  }
}

console.log(StaticMembers.prop)
StaticMembers.staticMethod()

// 15 -  generic class

class Item<T, U> {
  first
  second

  constructor(first: T, second: U) {
    this.first = first
    this.second = second
  }
  get showFirst() { return "o First é " + this.first}
}

const newItem = new Item("caixa", 'surpresa')

console.log(newItem)
console.log(newItem.showFirst)

const secondItem = new Item(12, true)
console.log(secondItem)

console.log(secondItem.showFirst)

// 16 - parameter properties

class ParameterProps {
  constructor(public name: string, private qty: number, private price: number){
    this.name = name,
    this.qty = qty,
    this.price = price
  }
  get showQty(){
    return `Qtd total: ${this.qty}`
  }
  get showPrice(){
    return `Vlr total: ${this.price}`
  }
}

const newShirt = new ParameterProps('Camisa', 10, 20)

console.log(newShirt.name)  
// console.log(newShirt.price)
console.log(newShirt.showQty)  
console.log(newShirt.showPrice)  

// 17 - Class expressions

const myClass = class<T>{
  name
  constructor(name: T){
    this.name = name;
  }
}
const pessoa = new myClass('Jones');

console.log(pessoa)
console.log(pessoa.name)

// 18 - Abstract Class
abstract class AbstractClass {
 abstract showName():void 
}
// const newObj = new AbstractClass()

class AbstractExample extends AbstractClass {
  name: string
  constructor(name: string) {
    super()
    this.name=name
  }
  showName(){
    console.log(`O Nome é ${this.name}`)
  }
}

const nome = new AbstractExample("Josias")
nome.showName()

// / 19 - relacoes entre classes

class Dog {
  name!: string
}

class Cat {
  name!: string
}

const doguinho: Dog = new Cat()
doguinho.name="Dog"
console.log(doguinho)
console.log(doguinho.name)