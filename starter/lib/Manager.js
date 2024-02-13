// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("../Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Method specific to Engineer class
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Override the getRole() method to return 'Engineer'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager; 
