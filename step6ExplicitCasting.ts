// Explicit Casting
// Syntax for Casting

// Explicit Casting in TypeScript. Explicit casting (also known as type assertion) allows you to tell TypeScript what type a value should be, bypassing some of TypeScript's type-checking. This can be useful when you are confident about the type of a value and want to tell TypeScript to treat it as such.

let value: any = "123";
let strLength: number = (value as string).length;
console.log(strLength); // Output: 3
