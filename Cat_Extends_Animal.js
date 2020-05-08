const { Animal } = require("./Animal.js");
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

module.exports = { Cat };
