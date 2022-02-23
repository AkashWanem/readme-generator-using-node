// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your Project? *',
    validate: nameInput => {
        // to validate user has entered an information in input
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter the title of your Project');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'title',
    message: 'What is the description of your Project? *',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter the description of your Project');
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmInstallation',
    message: 'Does your project require an installation process?'  
},
// this confirms whether their project requires installation or not
{
    type: 'input',
    name: 'installation',
    message: 'Please type in installation instructions.',
    when: ({ confirmInstallation }) => {
        if (confirmInstallation) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmUsage',
    message: 'Would you like to give Usage instructions?'  
},
{
    type: 'input',
    name: 'installation',
    message: 'Please type in usage instructions.',
    when: ({ confirmUsage }) => {
        if (confirmUsage) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmContribution',
    message: 'Shall other developers add their contribution?'  
},
{
    type: 'input',
    name: 'contribution',
    message: 'Please type in contribution guidelines.',
    when: ({ confirmUsage }) => {
        if (confirmUsage) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmTest',
    message: 'Can users test your project?'  
},
{
    type: 'input',
    name: 'test',
    message: 'Please explain how they can test your project.',
    when: ({ confirmTest }) => {
        if (confirmTest) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license.',
    choices: [

    ],
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please select a license');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'username',
    message: 'Please type in your Github username? *',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Please type in your email address.',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your email address.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'contact',
    message: 'Please type in instructions on how to contact you.',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            return false;
        }
    }
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
