// 1 - exemplo decorator

function MyDecorator() {
  console.log("Iniciando decorator!")
  return function (
    target: any,
    propertkey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Executando decorator')
    console.log('target', target)
    console.log('propertkey', propertkey)
    console.log('descriptor', descriptor)
  }
}

class myClass {
  @MyDecorator()
  testing() {
    console.log("Terminando execução do método")
  }
}
const myObj = new myClass();

myObj.testing();

// 2 - multiplos decoratos
function a() {
  return function (
    target: any,
    propertkey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou a.")
  }
}
function b() {
  return function (
    target: any,
    propertkey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou b.")
  }
}
function c() {
  return function (
    target: any,
    propertkey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou c.")
  }
}
class MultipleDecorators {
  @c()
  @b()
  @a()
  testing() {
    console.log("Terminando a execução")
  }
}

const multipleDecorators = new MultipleDecorators;
multipleDecorators.testing();

// 3 - class decorator
function classDecorator(constructor: Function) {
  console.log("Nome da classe: " + constructor.name)
  if (constructor.name === 'User') {
    console.log("Criando Usuário")
  }
}

@classDecorator
class User {
  name;
  constructor(name: string) {
    this.name = name
  }
}

const elisa = new User('Elisa');
console.log(elisa)

// 4 - method decorator

function enumerable(value: boolean) {
  return function (
    target: any,
    propertkey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  }
}

class Machine {
  name;
  constructor(name: string) {
    this.name = name;
  }
  @enumerable(false)
  showName() {
    console.log(this)
    return `O nome da maquina é ${this.name}`
  }
}
const trator = new Machine('Trator')
console.log(trator.showName())

// 5 - acessor decorator

class Monster {
  name?
  age?
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  @enumerable(true)
  get showName() {
    return `Nome do monstro: ${this.name}`
  }
  @enumerable(false)
  get showAge() {
    return `Idade do monstro: ${this.age}`
  }
}
const charmader = new Monster('Charmader', 25)
console.log(charmader)

// 6 - property decorator
function formatNumber() {
  return function (target: Object, propertyKey: string) {

    let value: string

    const getter = function () {
      return value
    }
    const setter = function (newVal: string) {
      value = newVal.padStart(5, '0')
    }
    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter
    })

  }
}
class Id {
  @formatNumber()
  id;
  constructor(id: string) {
    this.id = id;
  }
}
const newItem = new Id("1");
console.log(newItem)

// 7 - exemplo de class decorator
function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}
@createdDate
class Book {
  id
  createdAt?: Date;
  constructor(id: number) {
    this.id = id;
  }
}
@createdDate
class Pen {
  id
  createdAt?: Date;
  constructor(id: number) {
    this.id = id;
  }
}
const book = new Book(12)
const pen = new Pen(11)
console.log(book.createdAt)
console.log(pen)

// 8 - exemplo pethod decorator

function checkIfPosted() {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    // console.log(childFunctions)
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log(`Usuário ja postou isso: ${args[1]}, ${args[0]} agora não pode mais!`)
        console.log(descriptor)
        return
      } else {
        return childFunction.apply(this, args)
      }
    }
    return descriptor;
  }
}
class Post {
  alreadyPosted = false;
  @checkIfPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post do usuário: ${content}`);
  }
}
const newPost = new Post();
newPost.post('Meu primeiro post!', newPost.alreadyPosted);
newPost.post('Meu segundo post!', newPost.alreadyPosted);

// 9 - exemplo de property decorator

function Max(limit: number) {
  return function(target: Object, propertyKey: string, ) {

    let value: string
    const getter = function () {
      return value
    }
    const setter = function (newValue: string) {
      if (newValue.length > limit) {
        console.log(`O maximo de caracteres é ${limit}`)
      }
      else {
        value = newValue
        console.log("Usuário cadastrado com sucesso!")
      }
    }
    Object.defineProperty(target, propertyKey, {
      get: getter, set:setter
    })
  }
}

class Admin {
  @Max(10)
  username

  constructor(username: string) {
    this.username = username;
  }
}
const usuario1 = new Admin("Joaquim");
const usuario2 = new Admin("Joaquim da Silva Xavier");