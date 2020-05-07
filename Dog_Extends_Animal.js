const { Animal } = require("../animal-oop/Animal.js");
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
module.exports = { Dog };
