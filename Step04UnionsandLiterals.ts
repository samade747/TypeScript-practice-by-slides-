// 4a. Union Types
// Union types allow a value to be one of several types. You define them using the | operator.

type StringOrNumber = string | number;

let valuez: StringOrNumber;

valuez = "Hello";
console.log(valuez); // Output: Hello

valuez = 42;
console.log(valuez); // Output: 42

// Union types are useful for functions or variables that can accept multiple types:

function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

console.log(padLeft("Hello", 4)); // Output: "    Hello"
console.log(padLeft("Hello", ">>")); // Output: ">>Hello"


// 4b. Literal Types
// Literal types allow you to define a type that can be one of a specific set of values. This is useful for ensuring that a variable can only take on specific values.

type Direction = "up" | "down" | "left" | "right";

let move: Direction;

move = "up";
console.log(move); // Output: up

move = "left";
console.log(move); // Output: left

// move = "forward"; // Error: Type '"forward"' is not assignable to type 'Direction'.

// 4b. Literal Types
// Literal types allow you to define a type that can be one of a specific set of values. This is useful for ensuring that a variable can only take on specific values.

// type Direction = "up" | "down" | "left" | "right";

// let move: Direction;

// move = "up";
// console.log(move); // Output: up

// move = "left";
// console.log(move); // Output: left

// // move = "forward"; // Error: Type '"forward"' is not assignable to type 'Direction'.

// // Literal types are particularly useful for creating more expressive and strict type constraints:

// function moveCharacter(direction: Direction) {
//     console.log(`Moving ${direction}`);
// }

// moveCharacter("up");    // Output: Moving up
// moveCharacter("down");  // Output: Moving down
// moveCharacter("forward"); // Error: Argument of type '"forward"' is not assignable to parameter of type 'Direction'.

// 4c. Combining Unions and Literals
// You can combine union types with literal types to create more specific types.

type Shape = "circle" | "square";
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; sideLength: number };

type ShapeObject = Circle | Square;

function area(shape: ShapeObject): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "square":
            return shape.sideLength * shape.sideLength;
    }
}

const circle: ShapeObject = { kind: "circle", radius: 5 };
const square: ShapeObject = { kind: "square", sideLength: 10 };

console.log(area(circle)); // Output: 78.53981633974483
console.log(area(square)); // Output: 100

// Union Types: Use | to define types that can be one of several types.
// Literal Types: Use specific values as types, enhancing type safety.
// Combining Unions and Literals: Combine union types with literal types for precise type definitions.

