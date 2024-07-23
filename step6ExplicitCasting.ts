// Explicit Casting
// Syntax for Casting

// Explicit Casting in TypeScript. Explicit casting (also known as type assertion) allows you to tell TypeScript what type a value should be, bypassing some of TypeScript's type-checking. This can be useful when you are confident about the type of a value and want to tell TypeScript to treat it as such.

let value: any = "123";
let strLength: number = (value as string).length;
console.log(strLength); // Output: 3


let value1: any = "123";
let strLength1: number = (value1 as string).length;
console.log(strLength1); // Output: 3


interface Person {
    name: string;
    age: number;
}

let obj: any = { name: "Alice", age: 30 };
let person = obj as Person;
console.log(person.name); // Output: Alice


//  Type Assertions with Functions
// Type assertions can also be useful in function signatures.

function getLength(input: string | number): number {
    if (typeof input === "string") {
        return (input as string).length;
    } else {
        return input.toString().length;
    }
}

console.log(getLength("Hello")); // Output: 5
console.log(getLength(12345));   // Output: 5


