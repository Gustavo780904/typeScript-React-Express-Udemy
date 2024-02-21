"use strict";
// 1 - exemplo decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MyDecorator() {
    console.log("Iniciando decorator!");
    return function (target, propertkey, descriptor) {
        console.log('Executando decorator');
        console.log('target', target);
        console.log('propertkey', propertkey);
        console.log('descriptor', descriptor);
    };
}
class myClass {
    testing() {
        console.log("Terminando execução do método");
    }
}
__decorate([
    MyDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
// 2 - multiplos decoratos
function a() {
    return function (target, propertkey, descriptor) {
        console.log("executou a.");
    };
}
function b() {
    return function (target, propertkey, descriptor) {
        console.log("executou b.");
    };
}
function c() {
    return function (target, propertkey, descriptor) {
        console.log("executou c.");
    };
}
class MultipleDecorators {
    testing() {
        console.log("Terminando a execução");
    }
}
__decorate([
    c(),
    b(),
    a()
], MultipleDecorators.prototype, "testing", null);
const multipleDecorators = new MultipleDecorators;
multipleDecorators.testing();
// 3 - class decorator
function classDecorator(constructor) {
    console.log("Nome da classe: " + constructor.name);
    if (constructor.name === 'User') {
        console.log("Criando Usuário");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const elisa = new User('Elisa');
console.log(elisa);
// 4 - method decorator
function enumerable(value) {
    return function (target, propertkey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da maquina é ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine('Trator');
console.log(trator.showName());
// 5 - acessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const charmader = new Monster('Charmader', 25);
console.log(charmader);
// 6 - property decorator
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, '0');
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
class Id {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], Id.prototype, "id", void 0);
const newItem = new Id("1");
console.log(newItem);
// 7 - exemplo de class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const book = new Book(12);
const pen = new Pen(11);
console.log(book.createdAt);
console.log(pen);
// 8 - exemplo pethod decorator
function checkIfPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        // console.log(childFunctions)
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log(`Usuário ja postou isso: ${args[1]}, ${args[0]} agora não pode mais!`);
                console.log(descriptor);
                return;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post('Meu primeiro post!', newPost.alreadyPosted);
newPost.post('Meu segundo post!', newPost.alreadyPosted);
// 9 - exemplo de property decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            if (newValue.length > limit) {
                console.log(`O maximo de caracteres é ${limit}`);
            }
            else {
                value = newValue;
                console.log("Usuário cadastrado com sucesso!");
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter, set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
const usuario1 = new Admin("Joaquim");
const usuario2 = new Admin("Joaquim da Silva Xavier");
