console.log("prova");

// ESERCIZIO 1
console.log("ESERCIZIO 1");

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  isOlder(otherUser) {
    let tempPhrase = "e' piu' vecchio di";
    return console.log(
      this.age > otherUser.age
        ? `${this.firstName} ${tempPhrase} ${otherUser.firstName}.`
        : `${otherUser.firstName} ${tempPhrase} ${this.firstName}.`
    );
  }
}

// users
const gigio = new User("Gigio", "Topo", 87, "Marte");
const mario = new User("Mario", "Idraulico", 109, "Marioland");
const alan = new User("Alan", "Wake", 48, "Terra");
const doctor = new User("Doctor", "Who", 200, "Marioland");

gigio.isOlder(mario);
alan.isOlder(doctor);

// ESERCIZIO 2
console.log("ESERCIZIO 2");

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  hasSameOwner(otherPet) {
    return this.ownerName.toLowerCase() === otherPet.ownerName.toLowerCase()
      ? true
      : false;
  }
}

// test esercizio 2
const cane = new Pet("Milo", "Giorgio", "cane", "labrador");
const gatto = new Pet("Lello", "Giorgio", "gatto", "maincoon");
const cammello = new Pet("Camy", "Re Luigi XVI", "cammello", "massacratore");

console.log(cane.hasSameOwner(gatto)); // true
console.log(cane.hasSameOwner(cammello)); // false

// function for data form manipulation
function createPet(event) {
  event.preventDefault();
  const petName = this.petName.value;
  console.log(petName);
  const ownerName = this.ownerName.value;
  const species = this.species.value;
  const breed = this.breed.value;

  pets.push(new Pet(petName, ownerName, species, breed));
  console.log(pets);

  showPets(pets);
}

// function to show pets
function showPets(arr) {
  let body = document.querySelector("body");

  let actualAside = document.querySelector("aside");
  if (actualAside) {
    body.removeChild(actualAside);
  }

  let aside = document.createElement("aside");
  for (let el of arr) {
    let div = document.createElement("div");
    div.setAttribute("class", "card");

    for (let property in el) {
      let p = document.createElement("p");

      p.innerHTML = `<strong>${property}:</strong> ${el[property]}`;
      div.appendChild(p);
    }

    aside.appendChild(div);
  }
  body.appendChild(aside);
}

// array of pets
const pets = [];

// DOM
let form = document.querySelector("form");

// event listener
form.addEventListener("submit", createPet);
