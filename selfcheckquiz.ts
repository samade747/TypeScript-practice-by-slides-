import inquirer from "inquirer";

let input1 = await inquirer.prompt({
    name: "userAnswer",
    type: "string",
    message: "what is the capital of France ?",
});

function quiz(question: string, correctAnswer: string) {
    if(input1.userAnswer.toLowerCase() === correctAnswer.toLowerCase()){
        console.log("correct")
    }else{
        console.log("wrong")
    }
}

quiz("what is the capital of France ?", "paris")