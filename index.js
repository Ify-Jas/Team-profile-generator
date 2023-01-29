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
            message: 'What is a name'

        },
        {
            name: 'id',
            message: 'Enter the employee Id',
        },
        {
            name: 'email',
            message: 'Enter user email address'
        },
        {
            type: 'list',
            name: 'role',
            message: 'Please select an employee role',
            choices: ['Engineer', 'Intern', 'Manager']
        }
    ]).then(employeeData=> {
        if(employeeData.role =='Engineer'){
           roleEngineer();

        }
        if(employeeData.role =='Intern'){
            roleIntern();
            

        }
        if(employeeData.role =='Manager'){
            roleManager();
            

        } 
    });

}

function roleEngineer(){
    inquirer.prompt([
        {
            name: 'github',
            message: 'Enter a Github username'
        },
        {
            type: 'confirm',
            name: 'continue',
            message: 'Do you wish to enter another employee?'
        }
    ]).then(engineerData=>{
        if(engineerData.continue){
            return employeeDetails();
        }
        console.log('Thank you for using the Team Profile Generator');
        
    })
  

}
function roleIntern(){
    inquirer.prompt([
        {
            name: 'school',
            message: 'Enter the name of your school'
        },
        {
            type: 'confirm',
            name: 'continue',
            message: 'Do you wish to enter another employee?'
        }
    ]).then(internData=>{
        if(internData.continue){
            return employeeDetails();
        }
        console.log('Thank you for using the Team Profile Generator');
        
    })
}
function roleManager(){
    inquirer.prompt([
        {
            name: 'officeNumber',
            message: 'Enter an office number'
        },
        {
            type: 'confirm',
            name: 'continue',
            message: 'Do you wish to enter another employee?'
        }
    ]).then(managerData=>{
        if(managerData.continue){
            return employeeDetails();
        }
        console.log('Thank you for using the Team Profile Generator');     

    })
}

function init() {
    cyclePrompt()
}
init();
