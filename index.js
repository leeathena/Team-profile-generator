const Manager = require("./starter/lib/Manager.js");
const Engineer = require("./starter/lib/Engineer.js");
const Intern = require("./starter/lib/Intern.js");
// const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


// Function to gather information about the team manager
async function gatherManagerInformation() {
    console.log("Please enter the team manager's information:");

    const { default: inquirer } = await import('inquirer');

    const teamMembers = [];

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
    return new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
}

// Function to gather information about an engineer
async function gatherEngineerInformation() {
    console.log("Please enter the engineer's information:");
    const { default: inquirer } = await import('inquirer');

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
    return new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
}

// Function to gather information about an intern
async function gatherInternInformation() {
    console.log("Please enter the intern's information:");
    const { default: inquirer } = await import('inquirer');

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
    return new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
}
// Function to ensure the output directory exists
function ensureOutputDirectoryExists() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
}

// Main function to run the application
async function main() {
    try {
        ensureOutputDirectoryExists(); 
        const teamMembers = [];
        const manager = await gatherManagerInformation();
        teamMembers.push(manager);

        while (true) {
            const { default: inquirer } = await import('inquirer');

            const { choice } = await inquirer.prompt({
                type: "list",
                name: "choice",
                message: "What would you like to do next?",
                choices: ["Add an engineer", "Add an intern", "Finish building the team"]
            });

            if (choice === "Add an engineer") {
                const engineer = await gatherEngineerInformation();
                teamMembers.push(engineer);
            } else if (choice === "Add an intern") {
                const intern = await gatherInternInformation();
                teamMembers.push(intern);
            } else if (choice === "Finish building the team") {
                break;
            }
        }

        const render = require("./starter/src/page-template.js");
        const htmlContent = render(teamMembers);
        fs.writeFileSync(outputPath, htmlContent);
        console.log("HTML file generated successfully at:", outputPath);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();
