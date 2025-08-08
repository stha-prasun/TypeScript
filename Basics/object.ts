const User = {
  name: "Prasun",
  email: "email",
  isActive: true,
};

const createUser = ({ name: string, isPaid: boolean }) => {};

let newUser = { name: "Prasun", isPaid: false, email: "email" };

createUser(newUser);

const createCourse = (): { name: string; price: number } => {
  //Return type object
  return { name: "Typescript", price: 1 };
};

export {};
