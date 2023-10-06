//import UserReview from './desafio3'
// 1 - Type guard

function sum(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string")
    console.log(parseFloat(a) + parseFloat(b));
  else if (typeof a === "number" && typeof b === "number")
    console.log(`A soma de ${a} + ${b} é `, a + b)
  else
    console.log("Impossível calcular")
}

sum("5", "7")
sum(5, 7)
sum(5, "7")

// 2 - checando se o valor existe

function operations(arr: number[], operation?: string | undefined) {
  if (operation) {
    if (operation === "sum") {
      const sum = arr.reduce((i, total) => i + total)
      console.log(sum)
    } else if (operation === "multiply") {
      const multiply = arr.reduce((i, total) => i * total)
      console.log(multiply)
    }
  } else
    console.log("Defina uma Operação!")
}
operations([1, 2, 3])
operations([1, 2, 3], "multiply")
operations([1, 2, 7], "sum")

// 3 - Instance of - checa se o objeto pertence a uma determinada classe e opera de acordo com esta.

class User {
  name
  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name)
  }
}

const gustavo = new User("Gustavo");
const elisa = new SuperUser("Elisa");

console.log(gustavo.name)
console.log(gustavo)
console.log(elisa.name)
console.log(elisa)

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    console.log(`Ola, ${user.name}, who are you?`)
  } else if (user instanceof User) {
    console.log(`Ola, ${user.name}`)
  }
}
userGreeting(gustavo)
userGreeting(elisa)

// 4 - Operador in - checa se existe um determinado atributo opcional

class Dog {
  name
  breed

  constructor(name: string, breed?: string) {
    this.name = name
    if (breed) this.breed = breed
  }
};
const chora = new Dog('Chorão', 'dushund');
const fro = new Dog('Frozen')

function showDogDetails(dog: Dog) {
  if (typeof dog !== 'undefined' && 'breed' in dog)
    console.log(`O dog ${dog.name} é da raça ${dog.breed}`)
  else {
    const tempDog = dog as { name: string };
    console.log(`O dog ${tempDog.name} é um viralatas`)
  }
}

showDogDetails(chora);
showDogDetails(fro);

// Desafio 3
type Review = 1 | 2 | 3 | 4 | 5;

class UserReview {
  name
  isReview
  review
  constructor(name: string, isReview: boolean, review?: Review) {
    this.name = name
    this.isReview = isReview
    if (review) {
      this.review = review
    }
  }

  static showReviewDetails(user: UserReview) {

    if (typeof user !== 'undefined' && user.isReview && 'review' in user) {
      switch (user.review) {
        case 1:
          console.log(`${user.name} avaliou a aplicação como "péssima", atribuindo apenas ${user.review} estrela.`);
          break;
        case 2:
          console.log(`${user.name} avaliou a aplicação como "ruim", atribuindo apenas ${user.review} estrelas.`);
          break;
        case 3:
          console.log(`${user.name} avaliou a aplicação como "regular", atribuindo apenas ${user.review} estrelas.`);
          break;
        case 4:
          console.log(`${user.name} avaliou a aplicação como "boa", atribuindo ${user.review} estrelas.`);
          break;
        case 5:
          console.log(`${user.name} avaliou a aplicação como "excelente", atribuindo ${user.review} estrelas.`);
      }
    } else
      console.log(`${user.name} não avaliou a aplicação.`);
  }
}

const chorao = new UserReview("Chorão", true, 5);
const frozen = new UserReview("Frozen", true, 1);
const suzy = new UserReview("Suzy", true, 4);
const nenem = new UserReview("Nenem", true, 2);
const coca = new UserReview("Coca", true, 3);
const fred = new UserReview("Fred", false);


UserReview.showReviewDetails(chorao);
UserReview.showReviewDetails(frozen);
UserReview.showReviewDetails(suzy);
UserReview.showReviewDetails(nenem);
UserReview.showReviewDetails(coca);
UserReview.showReviewDetails(fred);

// Chorão avaliou a aplicação como "excelente", atribuindo 5 estrelas.
// Frozen avaliou a aplicação como "péssima", atribuindo apenas 1 estrela.
// Suzy avaliou a aplicação como "boa", atribuindo 4 estrelas.
// Nenem avaliou a aplicação como "ruim", atribuindo apenas 2 estrelas.
// Coca avaliou a aplicação como "regular", atribuindo apenas 3 estrelas.
// Fred não avaliou a aplicação.