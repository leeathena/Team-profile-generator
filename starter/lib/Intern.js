// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.


const Employee = require("../Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // Method specific to Engineer class
    getSchool() {
        return this.school;
    }

    // Override the getRole() method to return 'Engineer'
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern; 
