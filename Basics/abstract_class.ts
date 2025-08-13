abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  constructor(public r: number) { super(); }
  area() { return Math.PI * this.r ** 2; }
}

const c = new Circle(5);
console.log(c.area()); // 78.53981633974483
