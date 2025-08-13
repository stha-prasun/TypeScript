// Define an interface
interface Vehicle {
  brand: string;
  speed: number;

  drive(): void;  // method without body
  stop(): void;
}

// Implement the interface in a class
class Car implements Vehicle {
  constructor(
    public brand: string,
    public speed: number
  ) {}

  drive(): void {
    console.log(`${this.brand} is driving at ${this.speed} km/h`);
  }

  stop(): void {
    console.log(`${this.brand} has stopped.`);
    this.speed = 0;
  }
}

// Using the class
const myCar = new Car("Toyota", 120);
myCar.drive(); // "Toyota is driving at 120 km/h"
myCar.stop();  // "Toyota has stopped."
console.log(`Current speed: ${myCar.speed} km/h`);
