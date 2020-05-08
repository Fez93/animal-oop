const { Cat } = require("./Cat_Extends_Animal.js");
const { Dog } = require("./Dog_Extends_Animal.js");

class Home {
  constructor() {
    this.allAnimals = [];
  }

  adoptPet(animalType) {
    var animalExists = false;
    var i = 0;
    while (animalExists == false && i < this.allAnimals.length) {
      if (animalType != this.allAnimals[i]) {
        animalExists = false;
      } else {
        console.log("Not ok at all");
        animalExists = true;
        break;
      }
      i++;
    }

    if (animalExists == false) {
      this.allAnimals.push(animalType);
      console.log("Totally okay");
    }
  }

  makeAllSounds() {
    for (var i = 0; i < this.allAnimals.length; i++) {
      this.allAnimals[i].sound();
    }
  }
}

var home = new Home();
var cat1 = new Cat("Kitty");
var dog1 = new Dog("Rax");
var dog2 = new Dog("Ty4");
var cat2 = new Cat("Katana");

home.adoptPet(cat1);
home.adoptPet(dog1);
home.adoptPet(dog2);
home.adoptPet(cat2);
home.makeAllSounds();

dog1.eat();
