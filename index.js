#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
do {
    await askQuestion();
    var again = await inquirer.prompt([
        {
            type: "list",
            name: "restart",
            choices: ["Yes", "No"],
            message: chalk.gray("Do you want to continue?")
        }
    ]);
} while (again.restart == "Yes");
async function askQuestion() {
    let answer = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: chalk.gray("Which operation do you want to perform?"),
            choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division"]
        }, {
            type: "number",
            name: "num1",
            message: chalk.blueBright("Enter your first number:")
        }, {
            type: "number",
            name: "num2",
            message: chalk.blueBright("Enter your second number:"),
        }
    ]);
    switch (answer.operator) {
        case "+ Addition": {
            console.log(chalk.greenBright(`Your answer = ${answer.num1 + answer.num2}`));
            break;
        }
        case "- Subtraction": {
            console.log(chalk.greenBright(`Your answer = ${answer.num1 - answer.num2}`));
            break;
        }
        case "* Multiplication": {
            console.log(chalk.greenBright(`Your answer = ${answer.num1 * answer.num2}`));
            break;
        }
        case "/ Division": {
            console.log(chalk.greenBright(`Your answer = ${answer.num1 / answer.num2}`));
            break;
        }
    }
}
;
