import inquirer from "inquirer";

let isFriend = await inquirer.prompt([{
    name: "name",
    type: "string",
    message: "Enter your friend name:",
}])

if(isFriend.name == "samad" || isFriend.name == "maryam"){
    console.log(`${isFriend.name} is your friend`)
}else{
    console.log(`${isFriend.name} is not your friend`)
}

