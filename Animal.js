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

module.exports = { Animal };
