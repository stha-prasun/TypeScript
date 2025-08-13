class Dog {
  public name: string;
  public age: number;

  private collarId: string = "1a2b";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get getCollarId(): string {
    //getter
    return this.collarId;
  }

  set setCollarId(id: string) {
    //setter
    //setter cannot have any return type
    this.collarId = id;
  }
}

const myDog = new Dog("Tommy", 1);
console.log(myDog.getCollarId);
myDog.setCollarId = "1b2a";
console.log(myDog.getCollarId);
