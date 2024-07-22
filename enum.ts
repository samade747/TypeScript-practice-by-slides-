// step 07 enums 
// Enums allow you to define a set of named constants. They are useful for representing a collection of related values, such as days of the week, status codes, or any fixed set of options.
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up
console.log(move)
// By default, the first member of the enum is 0, and each subsequent member is incremented by 1.


// Explicit Values
// You can specify the values for enum members.

