// basic function 

function add(a: number, b: number): number {
    return a + b  
}

console.log(add(5, 10))

// Anonymous function

let mutliply = function(a: number, b: number): number {
    return a * b
}

console.log(mutliply(5, 10))


// Arrow Function

let subtract = (a: number, b: number):number{
    return a -b 
}

console.log(subtract(5, 10))

// step 9a function Optinal Parameters

function greet(name: string, greeting?: string): string {
    if(greeting){
        return `${greeting} ${name}`
    } else {
        return `hello ${name}`
    }
}

console.log(greet("samad", "good morning"))
console.log(greet("maryam"))


// step 9b function default Parameters

function greet2(name: string, greeting: string = "hello"): string {
    return `${greeting} ${name}`
}

console.log(greet2("samad"))
console.log(greet2("maryam", "good morning"))


// step 9c function rest Parameter 

function sum(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0) 

}

console.log(sum(5, 0, 7, 1))

// step 9d Async functions 

async function fetchData(url: string): Promise<void> {
    try{
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
    } catch(error){
        console.log("error fetching data", error)
    }
    
}

fetchData("https://jsonplaceholder.typicode.com/todos/1")

// step 9e function overloads

function add2(a: number, b: number): number
function add2(a: string, b: string): string
function add2(a: any, b: any): any {
    return a + b
}


