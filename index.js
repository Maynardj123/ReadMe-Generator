// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        Validate: (titleInput) => {
            if (titleInput) {
                return true;
            }else{
            return false;
            }
        },
    },
    {
        type: 'input',
        name:'description',
        message: 'Why did you build this project? what was your motivation? What problems did it solve? What did you learn?',
        Validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            }else{
            return false;
            }
        },
    },
    {
        type: 'input',
        name:'installation',
        message:'What are the steps to install project? What is the step-by-step to get it working?',
        Validate: (installationInput) => {
            if (installationInput) {
                return true;
            }else{
            return false;
            }
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'instructions and examples, screenshots if needed',
        Validate: (usageInput) => {
            if (usageInput) {
                return true;
            }else{
            return false;
            }
        },
    },
    {
        type: 'input',
        name:'credits',
        message:'list of your collaborators with links to their github profiles',
        Validate: (creditInput) => {
            if (creditInput) {
                return true;
            }else{
                return false;
            };
        },
    },
    {
        type: 'input',
        name:'license',
        choices: ['MIT', 'apache', 'GNU' ]
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,  function(err) {
        if(err) {     
            console.log (err);
            return
        };
    })
};

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   .then(data => {
    writeToFile('README.md', generateMarkdown(data))
   })
}

// Function call to initialize app
init();

