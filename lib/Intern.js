// Code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee(){
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
       
    }
    getSchool(){
        console.log(`my School is ${this.school}`);
    }
    getRole(){
        return console.log('Intern');

    }
}