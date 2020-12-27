const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./util/generateMarkdown");

const questions = [
    {
        type: "input",
        message: "What is the name of this project? ",
        name: "title",
    },
    {
        type: "input",
        message: "Please write a short description of this project. ",
        name: "description",
    },


    {
        type: "input",
        message: "Are there any instructions for installation? ",
        name: "installation",
    },

    {
        type: "input",
        message: "How should a user use this repository?  ",
        name: "usage",
    },

    {
        type: "input",
        message: "Are there any guidelines for contribution to this project?  ",
        name: "contribution",
    },

    {
        type: "input",
        message: "What command should be used to run tests?  ",
        name: "tests",
    },

    {
        type: "list",
        message: "What kind of license should this project have?  ",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },

    {
        type: "input",
        message: "What is your github username?  ",
        name: "github",
    },

    {
        type: "input",
        message: "What is your email?  ",
        name: "email",
    },

];
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Great job!");
    });
}

function init() {
    inquirer.prompt(questions)
        .then((data) => writeFile("README.md", generateMarkdown(data)))
}

init()
