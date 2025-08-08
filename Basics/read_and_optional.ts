type User = {
  readonly _id: string; //no one can change this
  name: string;
  email: string;
  isActive: boolean;
  creditCrad?: number; // ? means optional
};

let myUser: User = {
  _id: "1234",
  name: "",
  email: "",
  isActive: true,
};

myUser.email = "email";
// myUser._id = "123"; This will throw an error

// !------------------  Type Alias  --------------------!

type CardNumber = {
    c_number: number;
}

type CardDate = {
    c_date: string;
}

type CardDetails = CardNumber & CardDate // combination of two types

export {}