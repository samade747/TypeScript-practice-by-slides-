// // // Step 05: Objects
// // // 5a. Defining Objects

// // interface Person {
// //     name: string;
// //     age: number;
// // }

// // let person: Person = {
// //     name: "samad",
// //     age: 24
// // };

// // console.log(person);

// // // Using a Type Alias:

// // type Person1 = {
// //     name: string;
// //     age: number;
// // };

// // let person1: Person = {
// //     name: "maryam",
// //     age: 30
// // };

// // console.log(person);

// // // 5b. Object Aliases


// // type Employee = {
// //     id: number;
// //     name: string;
// //     position: string;
// // };

// // let employee: Employee = {
// //     id: 1,
// //     name: "Bob",
// //     position: "Developer"
// // };

// // console.log(employee);


// // // 5c. Structural Typing with Object Literals

// // type Point = {
// //     x: number;
// //     y: number;
// // };

// // let point: Point = { x: 10, y: 20 };
// // console.log(point);

// // // You can assign any object with the same structure to the Point type:

// // let point2 = { x: 15, y: 25, z: 30 };
// // point = point2; // Valid assignment
// // console.log(point);

// // 5d. Nested Objects
// // You can define objects with nested structures.

// type Address = {
//     street: string;
//     city: string;
//     postalCode: string;
// };

// type Person = {
//     name: string;
//     age: number;
//     address: Address;
// };

// let person: Person = {
//     name: "Alice",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "Wonderland",
//         postalCode: "12345"
//     }
// };

// console.log(person);

// // 5e. Intersection Types
// // Intersection types allow you to combine multiple types into one.

// type BusinessPartner = {
//     name: string;
//     credit: number;
// };

// type Identity = {
//     id: number;
//     name: string;
// };

// type Employee = BusinessPartner & Identity;

// let employee: Employee = {
//     id: 1,
//     name: "Bob",
//     credit: 1000
// };

// console.log(employee);


// // 5f. Using any, unknown, and never Types
// // any: Disables type checking. Use with caution.

// let value: any = 42;
// value = "Hello";
// value = true;

// // unknown: A safer alternative to any. You must perform some type checking before performing operations.

// let valuez: unknown = 42;

// if (typeof valuez === "string") {
//     console.log(value.length);
// }



// // never: Represents values that never occur. Commonly used in functions that throw errors or never return.

// function throwError(message: string): never {
//     throw new Error(message);
// }

// function infiniteLoop(): never {
//     while (true) {}
// }


// // Object Types: Use interface or type to define objects.
// // Structural Typing: Types are defined by their shape.
// // Nested Objects: Combine types to represent complex structures.
// // Intersection Types: Combine multiple types into one.
// // Type Safety: Use any, unknown, and never for type flexibility and safety.