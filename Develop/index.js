// array of questions for user

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateReadMe = require(./utils/generateReadMe");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'projecttitle',
      message: 'What is the project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a brief description of project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is the Installation Process?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'what is the project used for?',
    },
    {
      type: 'list',
      name: 'License',
      choices: [
        'Apache',
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"

      ]
    },
    {
      type: 'input',
      name: 'Contributors',
      message: 'Who contributed to the project?',
    },
    {
      type: 'input',
      name: 'Method of Testing',
      message: 'Was any testing involved?',
    },
    {
      type: 'input',
      name: 'Issues',
      message: 'Any issues with the site?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter Git Hub Repo Link?',
    },
    {
      type: 'input',
      name: 'webLink',
      message: 'Website Link if available?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter email if available: ',
    },
  ]);

// function to write README file


//function writeToFile(fileName, data) {

//}
async function init() {
  try {
    const answers = await promptUser();
    const generateContent = generateReadme(answers);
    await writeFileAsync("./readme/README.md", generateContent);
    console.log("./readme/README.md", generateContent)
  } catch (err) {
    console.log(err)
  }


  // function call to initialize program
  init();


