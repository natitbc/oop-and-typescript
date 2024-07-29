// Polymorphism

// Similar with Inheritance
// 1. Properties and method can be inherited
// 2. Properties and method can be overridden

class Animal {
  makeSound(): void {
    console.log('Generic Animal Sound');
  }
}

class Dog extends Animal {
  makeSound(): void {
    super.makeSound(); // Inherited from Animal
    console.log('Bark'); // Override from Animal
  }
}

class Cat extends Animal {
  makeSound(): void {
    super.makeSound(); // Inherited from Animal
    console.log('Meow'); // Override from Animal
  }
}

function triggerAnimalSound(animal: Animal): void {
  animal.makeSound();
}

triggerAnimalSound(new Dog()); 
triggerAnimalSound(new Cat());

// Polymorphism vs Abstraction

// 1. Polymorphism : need to use similar methods in different ways
// 2. Abstraction : need to hide complex implementation details and only use abstract methods

// Usecase for Polymorphism
// 1. File Converter : have superclass convert() method for PDFconverter and CSVConverter but convert() method is different
// 2. GameCharactor : have superclass attack() but Knight, Archer, Mage attack() method is different
// 3. UI component : have superclass render(),onClick() method but Button, Checkbox render(),onClick() method is different