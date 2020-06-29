var inqurer = require("inquirer");
const inquirer = require("inquirer");

function initialize() {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Do you want to create a README.md file?",
            name: "userConfirmation"
        }
    ]).then(function(response) {
        if(response.userConfirmation) {
            getInput()
        }
        else {
            console.log("Goodbye.")
        }
    })
}

function getInput() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the title.",
            name: "userTitle"
        },
        {
            type: "input",
            message: "Enter the tagline of your application.",
            name: "userTagline"
        },
        {
            type: "list",
            message: "What do you want to title your first section?",
            choices: ["Installation", "Getting Started", "First Steps", "I want to write my own"],
            name: "userFirstTitle",
        },
        {
            when: function(res) {
                if(res.userFirstTitle === "I want to write my own") {
                    return res.userFirstTitle
                }
            },
            name: "firstSectionChoice",
            message: "Enter your custom section name."
        }
    ])
}


initialize()
