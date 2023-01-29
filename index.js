const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const employeeDetails = [];



//Code to gather information about the development team members, and render the HTML file.

function manager() {
    inquirer.prompt([
        {
            name: 'name',
            message: 'Enter a name'

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
            name: 'officeNumber',
            message: 'Enter the officeNumber'
        },
        {
            type: 'confirm',
            name: 'continue',
            message: 'Do you wish to add another employee?'
        
        }
    ]).then(data=>{
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        employeeDetails.push(manager);
        if(data.continue){
            cyclePrompt();
        }else {
            console.log('Thank you for using the profile generator');
            createEmployee();
        }
    })

}
function intern() {
    inquirer.prompt([
        {
            name: 'name',
            message: 'Enter a name'

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
            name: 'school',
            message: 'Enter name of school'
        },
        {
            type: 'confirm',
            name: 'continue',
            message: 'Do you wish to add another employee?'
        
        }
    ]).then(data=>{
        const intern = new Intern(data.name, data.id, data.email, data.school);
        employeeDetails.push(intern);
        if(data.continue){
            cyclePrompt();
        }else {
            console.log('Thank you for using the profile generator');
            createEmployee();

        }
    })

}

function engineer() {
    inquirer.prompt([
        {
            name: 'name',
            message: 'Enter a name'

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
            name: 'github',
            message: 'Enter github username'
        },
        {
            type: 'confirm',
            name: 'continue',
            message: 'Do you wish to add another employee?'
        
        }

    ]).then(data=>{
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        employeeDetails.push(engineer);
        if(data.continue){
            cyclePrompt();
        }else {
            console.log('Thank you for using the profile generator');
            createEmployee();

        }
    })

}

function createEmployee(){
    render(employeeDetails);
}


function cyclePrompt(){
        console.log('----Welcome to the Team Profile Generator----')
        inquirer.prompt(
            {
                type: 'list',
                name: 'start',
                message: 'Choose an employee role to enter',
                choices: ['Engineer', 'Intern', 'Manager']

            }
        ).then(data=> {
            if(data.start == 'Engineer'){
                return engineer();
            }
            if(data.start == 'Intern'){
                return intern();
            }
            if(data.start == 'Manager'){
                return manager();
            }
        })
    }

function init() {
    cyclePrompt()
}
init();


module.exports = {
    manager,
    intern,
    engineer

}