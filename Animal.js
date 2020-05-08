class Animal {
  constructor(name) {
    this.name = name;
  }

  sound(animalType, animalSound) {
    console.log(animalType + " " + animalSound);
  }

  eat() {
    console.log(this.name + " eats");
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
  }

  sound() {
    Animal.prototype.sound.call(this, "Cats ", "meows");
  }

  eat() {
    Animal.prototype.eat.call(this);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.animalSound = "bark";
    this.animalType = "Dogs";
  }

  sound() {
    Animal.prototype.sound.call(this, this.animalType, this.animalSound);
  }

  eat() {
    Animal.prototype.eat.call(this);
  }
}

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
