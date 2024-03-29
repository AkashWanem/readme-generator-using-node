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
    name: 'description',
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
    name: 'usage',
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
    message: 'Did other developers added their contribution?'  
},
{
    type: 'input',
    name: 'contribution',
    message: 'Please type in contribution guidelines.',
    when: ({ confirmContribution }) => {
        if (confirmContribution) { 
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
    type: 'list',
    name: 'license',
    message: 'Please choose a license.',
    choices: [
        'MIT',
        'GNU General Public License 2.0',
        'Apache License 2.0',
        'ISC',
        'Mozilla Public License 2.0'
    ]
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
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log('Sorry there is an error :' + error);
        } 
    })
}

const createReadMe = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {
        const userAnswers = await inquirer.prompt(questions);
        console.log('Your data is being processed into the README.md: ', userAnswers);
        const markDown = generateMarkdown(userAnswers);
        console.log(markDown);
        await createReadMe('README1.md', markDown);
    } catch (error) {
        console.log('Sorry there is an error.' + error);
    }
};

// Function call to initialize app
init();
