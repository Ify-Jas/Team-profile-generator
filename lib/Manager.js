// Code to define and export the Manager class. 
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
       
    }
    getRole(){
        return console.log('Manager');

    }
}
module.exports = Manager;