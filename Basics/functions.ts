function addTwo(num: number) {
  return num + 2;
}

addTwo(2);

function signUpUser(name: string, email: string, age: number) {
  console.log(name, email, age);
}

signUpUser("test", "email", 19);

function loginUser(name: string, email: string): string {
  //function return type String
  return "Welcome Back User";
}

const heros = ["thor", "ironman", "cap"];

heros.map((hero): string => {
  return `Hello. ${hero}`;
});

export {};
