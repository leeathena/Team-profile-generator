const Manager = require("../team-profile-generator/starter/lib/Manager.js");
const Engineer = require("../team-profile-generator/starter/lib/Engineer.js");
const Intern = require("../team-profile-generator/starter/lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./starter/src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


// Function to gather information about team members
// Function to gather information about team members
async function gatherTeamInformation() {
    const teamMembers = [];

    // Prompt for employee's role
    const roleInfo = await inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Select team member's role:",
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ]);

    // Based on the selected role, prompt for the corresponding information
    switch (roleInfo.role) {
        case 'Manager':
            const managerInfo = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter manager's name:"
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter manager's ID:"
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter manager's email:"
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "Enter manager's office number:"
                }
            ]);
            teamMembers.push(new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber));
            break;
        case 'Engineer':
            const engineerInfo = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter engineer's name:"
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter engineer's ID:"
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter engineer's email:"
                },
                {
                    type: "input",
                    name: "github",
                    message: "Enter engineer's GitHub username:"
                }
            ]);
            teamMembers.push(new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github));
            break;
        case 'Intern':
            const internInfo = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter intern's name:"
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter intern's ID:"
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter intern's email:"
                },
                {
                    type: "input",
                    name: "school",
                    message: "Enter intern's school:"
                }
            ]);
            teamMembers.push(new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school));
            break;
        default:
            console.error('Invalid role selected.');
    }

    return teamMembers;
}
