const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


//Code to gather information about the development team members, and render the HTML file.
function cyclePrompt(){
    console.log('----Welcome to the Team Profile Generator----')
    inquirer.prompt(
        {
            type: 'confirm',
            name: 'start',
            message: 'Would you like to enter an employee'

        }
    ).then(data=> {
        console.log(data.start);
        if(data.start){
            return employeeDetails();
        }
        console.log('Thank you for using the Team Profile Generator');
    })
}

function employeeDetails(){
    inquirer.prompt([
        {
            name: 'name',
            message: 'What is your name'

        },
        {
            name: 'id',
            message: 'Enter your employee Id',
        },
        {
            name: 'email',
            message: 'Enter your email address'
        },
        {
            type: 'checkbox',
            name: 'role',
            message: 'Please select an employee role',
            choices: ['Engineer', 'Intern', 'Manager']
        }
    ]).then(employeeData=> {
        console.log(employeeData.role);
        if(employeeData.role == ['Engineer']){
           return roleEngineer();
        }
        if(employeeData.role == ['Intern']){
            return roleIntern();
        }
        if(employeeData.role == ['Manager']){
            return roleManager();
        }
        
    })
}

function roleEngineer(){
    inquirer.prompt(
        {
            name: 'github',
            message: 'Enter your Github username'
        }
    ).then(engineerData=>{
        cyclePrompt()
    })
}
function roleIntern(){
    inquirer.prompt(
        {
            name: 'school',
            message: 'Enter the name of your school'
        }
    ).then(internData=>{
        cyclePrompt();
    })
}
function roleManager(){
    inquirer.prompt(
        {
            name: 'officeNumber',
            message: 'Enter your office number'
        }
    ).then(managerData=>{
        cyclePrompt();
    })
}

function init() {
    cyclePrompt()
}
init();
