// Code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        console.log(`The name of the employee is ${this.name}`)
    }
    getId(){
        console.log(`The employee Id is ${this.id}`);

    }
    getEmail(){
        console.log(`The employee email is ${this.email}`)
    }
    getRole(){
        return console.log('Employee');
    }



}

module.exports = Employee;