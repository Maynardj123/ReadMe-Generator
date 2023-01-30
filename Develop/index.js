// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'motive',
        message: 'what was your motivation?',
        Validate: (answer) => {
            if (answer !== '') {
                return true;
            }else{
            return false;
            }
        },
    },
    {
        type: 'input',
        name:'Why',
        message: 'Why did you build this project',
        Validate: (answer) => {
            if (answer !== '') {
                return true;
            }else{
            return false;
            }
        },
    },
    {
        type: 'input',
        name:'Solving',
        message:'What problems did it solve',
        Validate: (answer) => {
            if (answer !== '') {
                return true;
            }else{
            return false;
            }
        },
    },
    {
        type: 'input',
        name: 'Learning',
        message: 'What did you learn',
        Validate: (answer) => {
            if (answer !== '') {
                return true;
            }else{
            return false;
            }
        },
    },
    {
        type: 'input',
        name:
        message:
        Validate: (answer) => {
            if (answer !== '') {
                return true;
            }else{
                return false;
            };
        },
    },
    {
        type: 'input',
        name:
        message:
        Validate: (answer) => {
            if (answer !== '') {
                return true;
            }else{
                return false;
            };
        },
    },
    {
        type: 'input',
        name:
        message:
        Validate: (answer) => {
            if (answer !== '') {
                return true;
            }else{
                return false;
            };
        },
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    .promptUser()
}

// Function call to initialize app
init();
