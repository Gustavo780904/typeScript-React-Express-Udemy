// 1 - importação de arquivos

import importGreet from './greet.js';

importGreet();

// 2 - import de variaveis

import {x} from './variable.js'

console.log(x)

// 3 - multiplas importacoes

import {a, b, myFunction} from './multiple.js'

console.log(a);
console.log(b);
myFunction();

// 4 - Alias

import { someName as name } from './alias.js';

console.log(name)

// 5 - import all

import * as myObject from './numbers.js'

console.log(myObject)

const x1 = myObject.n1
const x2 = myObject.n2
const x3 = myObject.n3

myObject.showNumber(x1)
myObject.showNumber(x2)
myObject.showNumber(x3)

// 6 - importando tipos ou interfaces

import {Human} from "./myType.js"

class User implements Human {
  name
  age
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}

const user = new User("Tatiana", 45)
console.log(user)