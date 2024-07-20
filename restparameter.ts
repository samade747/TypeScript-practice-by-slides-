// implementing a rest Parameter
// ... rest parameter collects all the parameters into an array called numbers
//The reduce method works the same way as in JavaScript, summing up all the elements in the numbers array. The 0 in reduce is the initial value of the accumulator (acc).


function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0)
}

console.log(sumAll(1, 2, 3)) 
console.log(sumAll(10, 20, 30, 40, 50))


