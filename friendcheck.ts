import inquirer from "inquirer";

let isFriend = await inquirer.prompt([{
    name: "name",
    type: "string",
    message: "Enter your friend name:",
}])