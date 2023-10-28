// TODO: Include packages needed for this application

const inquire = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        "type":"input",
        "message":"What is the title of your project?",
        "name":"title",
    },
    {
        "type":"input",
        "message":"What is the description of your project?",
        "name":"description",
    },
    {
        "type":"input",
        "message":"What is the installation instructions of your project?",
        "name":"installation",
    },
    {
        "type":"input",
        "message":"What is the usage of your project?",
        "name":"usage",
    },
    {
        "type":"input",
        "message":"What is the license of your project?",
        "name":"license",
    },
    {
        "type":"input",
        "message":"What is the contribution of your project?",
        "name":"contribution",
    },
    {
        "type":"input",
        "message":"What is the test of your project?",
        "name":"test",
    },
    {
        "type":"input",
        "message":"enter your email?",
        "name":"email",
    },
    {
        "type":"input",
        "message":"What is your github username",
        "name":"github",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions)
    .then(answers =>{
    fs.writeFileSync("./dist/README.md", `
# ${answers.title}

## Description

${answers.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${answers.installation}

## Usage

${answers.usage}


## License

${answers.license}

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)



## How to Contribute

${answers.contribution}

## Tests
${answers.test}


## Questions

${answers.email}
https://github.com/${answers.github}

    `)  
    })
}

// Function call to initialize app
init();

