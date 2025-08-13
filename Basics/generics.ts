function identity<T>(value: T): T {
  console.log(value);
  return value;
}

const num = identity(42);      // logs 42, num = 42
const str = identity("hello"); // logs hello, str = "hello"
