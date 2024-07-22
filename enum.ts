// // step 07 enums 
// // Enums allow you to define a set of named constants. They are useful for representing a collection of related values, such as days of the week, status codes, or any fixed set of options.
// // enum Direction {
// //     Up,
// //     Down,
// //     Left,
// //     Right
// // }

// // let move: Direction = Direction.Up
// // console.log(move)
// // By default, the first member of the enum is 0, and each subsequent member is incremented by 1.


// // Explicit Values
// // You can specify the values for enum members.

// // enum Direction {
// //     Up = 1,
// //     Down,
// //     Left,
// //     Right
// // }

// // let move: Direction = Direction.Up
// // console.log(move)
// // outpt 3


// // Computed and Constant Members
// // You can have computed values for enum members.

// enum Shape {
//     Area = 2 * 3.14 * 10, // Computed value
//     Circumference = 2 * 3.14 * 10
// }

// console.log(Shape.Area); // Output: 62.8
// console.log(Shape.Circumference); // Output: 62.8

// // Heterogeneous Enums
// // TypeScript supports enums with mixed value types, though they are less common.

// enum Answer {
//     No = 0,
//     Yes = 'YES'
// }

// let answer: Answer = Answer.Yes
// console.log(answer) // Output: 'YES'

// // Enum Member Names
// // You can access enum members by their names.
// enum Color {
//     Red,
//     Green,
//     Blue
// }

// let colorName: string = Color[2];
// console.log(colorName); // Output: "Blue"

// // Using Enums for Status Codes

// enum Status {
//     Pending = 1,
//     Approved,
//     Rejected
// }

// function checkStatus(status: Status) {
//     switch (status) {
//         case Status.Pending:
//             console.log("Pending");
//             break;
//         case Status.Approved:
//             console.log("Approved");
//             break;
//         case Status.Rejected:
//             console.log("Rejected");
//             break;
//     }
// }

// checkStatus(Status.Approved); // Output: Approved




// Enum with Reverse Mapping
// TypeScript allows reverse mapping, where you can access the name from the value.

enum Status {
    Pending = 1,
    Approved,
    Rejected
}

let statusValue: number = Status.Approved;
let statusName: string = Status[statusValue];

console.log(statusValue); // Output: 2
console.log(statusName); // Output: "Approved"


// Basic Enums: Define a set of named constants.
// Explicit Values: Assign specific values to enum members.
// String Enums: Use strings as enum values.
// Computed Members: Compute enum values dynamically.
// Heterogeneous Enums: Use mixed types for enum values.
// Accessing Enum Members: Use member names and values for easy access.
// Reverse Mapping: Access enum names from values.

// Step 06: Explicit Casting

