// Array Methods
// TypeScript supports standard array methods, and you can leverage type annotations for these methods.
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// numbers.forEach((num) => {
//     console.log(num*2)
// })

// Using map
let numbers2:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let doubled = numbers2.map((num) => {
    return num * 2
})

console.log(doubled)

// Using filter

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNumbers = numbers.filter((num) => {
    return num % 2 === 0 
})

console.log(evenNumbers)

// / using reduce 

let numbers3: number[] = [1, 2, 3, 4, 5]

let sum = numbers3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)

console.log(sum)

// comments only for reference
// Initial Value: The initial value of accumulator is 0.
// First Iteration:
// accumulator: 0
// currentValue: 1
// accumulator + currentValue: 0 + 1 = 1 (new value of accumulator)
// Second Iteration:
// accumulator: 1
// currentValue: 2
// accumulator + currentValue: 1 + 2 = 3 (new value of accumulator)
// Third Iteration:
// accumulator: 3
// currentValue: 3
// accumulator + currentValue: 3 + 3 = 6 (new value of accumulator)
// Fourth Iteration:
// accumulator: 6
// currentValue: 4
// accumulator + currentValue: 6 + 4 = 10 (new value of accumulator)
// Fifth Iteration:
// accumulator: 10
// currentValue: 5
// accumulator + currentValue: 10 + 5 = 15 (new value of accumulator)
// The final result is 15, which is the sum of all numbers in the array.


// callback: A function that is executed on each element in the array, taking four arguments
// accumulator: The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
// currentValue: The current element being processed in the array.
// currentIndex: The index of the current element being processed in the array. Starts from index 0 if an initialValue is provided, otherwise starts from index 1.
// array: The array reduce was called upon.

// initialValue: A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used as the initial accumulator value, and the callback will not be executed on the first element.

let fruits: string[] = ["apple", "banana", "apple", "orange", "banana", "apple"];

let fruitCount = fruits.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {} as { [key: string]: number });

console.log(fruitCount); // Output: { apple: 3, banana: 2, orange: 1 }


// Initial Value: The initial value of accumulator is an empty object {}.
// Each Iteration:
// For each fruit, we check if it already exists in the accumulator object.
// If it does, increment its count by 1.
// If it doesn't, set its count to 1.
// Final Result: An object representing the count of each fruit.
// Summary
// The reduce method executes a reducer function on each element of the array, resulting in a single output value.
// You can use reduce to perform various operations, like summing numbers, counting elements, or even transforming data structures.
// The reduce method is powerful and flexible but can be complex to understand at first. With practice, it becomes a very useful tool for array operations.

// step 08b Array type Inference

// TypeScript can infer the type of elements in an array. This is useful when the array is initialized with values.

let autotypeisinfer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // type inference as number[]
console.log(autotypeisinfer);


// Step 08c: Readonly Arrays\
// Readonly arrays prevent modification of their elements.

let numbersreadonly: readonly number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbersreadonly.push(11);
// Error: Property 'push' does not exist on type 'readonly number[]'

// Step 08d: Array Destructuring

// Destructuring syntax makes it easy to extract values from arrays.

let[first, second, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(first)
console.log(second)
console.log(rest)

//Step 08e: Multi-Dimensional Arrays
// TypeScript supports multi-dimensional arrays.

let maryam: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(maryam[1][2])
