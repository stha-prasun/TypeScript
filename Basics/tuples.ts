// A tuple with a string, number, and boolean in order
let person: [string, number, boolean];

person = ["Alice", 30, true]; // ✅ Correct
// person = [30, "Alice", true]; // ❌ Error: Type order matters

console.log(person[0]); // "Alice"
console.log(person[1]); // 30
console.log(person[2]); // true

//Tuple with rest elements
let scores: [string, ...number[]];
scores = ["Alice", 90, 85, 88];
