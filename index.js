// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
    },

    {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions for your project?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage information for your project?',
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your project?',
    },

    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for your project?',
    },

    {
        type: 'list',
        name: 'license',
        message: 'What license do you need for your project?',
        choices: ['MIT', 'ISC', 'Apache', 'BSD'],
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('SAMPLEREADME.md', data, (err) => {
        if(err) {
            console.error('Please provide the correct information.', err);
        } else {
            console.log('README file has been saved as SAMPLEREADME.md')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => writeToFile(generateMarkdown(responses)));
}

// Function call to initialize app
init();
