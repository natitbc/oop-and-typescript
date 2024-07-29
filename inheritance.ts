// Inheritance

// Properties and method can inherit to child class

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet():void {
    console.log(`Hello ${this.name}`);
  }
}

class Student extends Person {
  studentId: number;

  constructor(name: string, studentId: number) {
    super(name);
    this.studentId = studentId;
  }

  study():void {
    console.log(`${this.name} is studying`);
  }
}

const student = new Student('John', 1);
student.greet();  // Inheritance method from Person
student.study(); // self method from Student

// Example use case
// - Create basic properties and methods such as Animals have name and sound
// - Game charactor : each Charactor has name, strength, basic action