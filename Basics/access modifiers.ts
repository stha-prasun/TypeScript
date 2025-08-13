class class_User {
  readonly city: string = "Kathmandu";

  constructor(public email: string, private password: string) {}
}

const new_user = new class_User("email", "pass");
console.log(new_user);