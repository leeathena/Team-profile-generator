// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require ("../Employee");

const Employee = require("../Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Call the constructor of the parent class (Employee) using super()
        super(name, id, email);
        // Add any additional properties specific to the Engineer class
        this.github = github;
    }

    // Method specific to Engineer class
    getGithub() {
        return this.github;
    }

    // Override the getRole() method to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer; // Export the Engineer class
