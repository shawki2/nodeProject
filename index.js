#!user/bin/env node
const inquirer = require("inquirer");
const chalk = require('chalk');
const figlet = require('figlet');
const shell = require('shelljs');
// index.js

// const run = async () => {
//     // show script introduction 
//     // ask questions
//     // create the file
//     // show success message
// };
// run();

const init = () => {
    console.log(
        chalk.green(
            figlet.textSync('Node Likes JS', {
                font: 'Ghost',
                horizontallayout: 'default',
                verticaiLayout: 'default'
            })
        )
    );
}
// const run = async () => {
//     // show script introduction 
//     init();
//     // ask questions
//     // create the file
//     // show success message
// };
// run();
const askQuestions = () => {
    const questions = [
        {
            name: 'FILENAME',
            type: 'imput',
            message: 'What is the name of the file without extensions?'
        },
        {
            type: 'list',
            name: 'EXTENSION',
            message: 'What is the file extension?',
            choices: ['.rb', '.js', '.php', '.css'],
            filter: function (val) {
                return val.split('.')[1];
            }
        }
    ];
    return inquirer.prompt(questions);
};
// ...

// const run = async () => {
//     // show script introduction
//     init();
//     // ask questions
//     const answers = await askQuestions();
//     const { FILENAME, EXTENSION } = answers;
//     // create the file
//     // show success message
// };

const creatFile = (filename, extension) => {
    const filePath = '${process.cwd()}/${filename}.${extension}'
    shell.touch(filePath);
    return filePath;
};
// ...
// const run = async () => {
//     // show scrip introduction
//     init();

//     // ask questions
//     const answers = await askQuestions();
//     const { FILENAME, EXTENSION } = answers;

//     // create the file
//     const filePath = creatFile(FILENAME, EXTENSION);
//     // show success message
// };
//...
const success = (filepath) => {
    console.log(
        chalk.white.bgGreen.bold('Done! File created at ${filepath}')
    );
};
//...
const run = async () => {
    // show script introduction
    init();
    // ask questions
    const answers = await askQuestions();
    const { FILENAME, EXTENSION } = answers;

    // create the file
    const filePath = createFile(FILENAME, EXTENSION);

    // show success message
    success(filePath);
};
run();