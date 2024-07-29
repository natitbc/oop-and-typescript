
// create abstract Shape for set actions

abstract class Shape{
  abstract draw(): void;
}

// use abstract class Shape for Circle

class Circle extends Shape{
  draw(): void{
    console.log('Drawing Circle');
  }
}

const circle = new Circle();
circle.draw();

