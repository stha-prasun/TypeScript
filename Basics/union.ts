//Instead of using any, we should be strict and use unions

// Union type: can be either a string or a number
let id: string | number;

id = 101;       // ✅ valid (number)
id = "ABC123";  // ✅ valid (string)
// id = true;   // ❌ Error: boolean not allowed

// Function using a union type
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("Your ID is: " + id.toUpperCase());
  } else {
    console.log("Your ID is: " + id);
  }
}

printId(42);        // Your ID is: 42
printId("user_01"); // Your ID is: USER_01


//Array in union
// Each element can be string or number
let values: (string | number)[] = [];

values.push(42);         // ✅ number
values.push("Hello");    // ✅ string
// values.push(true);    // ❌ Error: boolean not allowed

console.log(values); // [42, "Hello"]
