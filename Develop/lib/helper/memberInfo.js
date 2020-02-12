const inquirer = require("inquirer");
const Engineer = require('../Engineer')
const Intern = require('../Intern')
const membersCard = require('./members')

const fs = require('fs');
const confirmNum = async (input) => {
    if (!isNaN(input)) {
        return true;
    }
    return false||"enter a valid Number";
}
const confirmNonNum = async (input) => {
    if (isNaN(input)) {
        return true;
    }
    return false||"enter a valid string";
}
const email = async (input) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(input)||"Enter a valid @.com";
}



function getMemberInfo(htmlContent) {
   // console.log('In getMemberInfo')
    inquirer.prompt([{
        type: "input",
        name: "teamcount",
        message: " how many members in your team?"
    }, ]).then(async function (teamcount) {
        for (i = 0; i < parseInt(teamcount.teamcount); i++) {

            await inquirer.prompt([{
                type: "list",
                message: "Enter the Title",
                name: "stack",
                choices: [
                    "Engineer",
                    "Intern"
                ]
            }, ]).then(async function (data) {
                if (data.stack === "Engineer") {
                    console.log("Hi i am an Engineer");

                    await inquirer.prompt([{
                            type: "input",
                            name: "id",
                            message: "Enter your id",
                            validate: confirmNum
                        },
                        {
                            type: "input",
                            name: "name",
                            message: "Please enter your name",
                            validate: confirmNonNum
                        },
                        {
                            type: "input",
                            name: "e-mail",
                            message: "Please enter the E-mail Id",
                            validate: email
                        },
                        {
                            type: "input",
                            name: "github",
                            message: "Please enter your github name",
                            validate: confirmNonNum
                        },

                    ]).then(function (data) {

                        //console.log(data.stack);
                        var engg = new Engineer( data.name, data.id,data["e-mail"], data.github);

                        htmlContent = htmlContent + membersCard.getMemberCard(engg);

                    });
                } else if (data.stack === "Intern") {
                    console.log("Hi i am an Intern");
                    await inquirer.prompt([{
                            type: "input",
                            name: "id",
                            message: "Please enter your id",
                            validate: confirmNum
                        },
                        {
                            type: "input",
                            name: "InternName",
                            message: "Please enter your name",
                            validate: confirmNonNum
                        },
                        
                        {
                            type: "input",
                            name: "e-mail",
                            message: "Please enter the E-mail Id",
                            validate: email
                        },
                        {
                            type: "input",
                            name: "school",
                            message: "Please enter your School name",
                            validate: confirmNonNum
                        },

                    ]).then(async function (data) {
                       // console.log( data.InternName,data.id, data["e-mail"], data.school);
                        var intern = new Intern( data.InternName,data.id, data["e-mail"], data.school);

                        htmlContent = htmlContent + membersCard.getMemberCard(intern);

                    });
                }
            });
        }
        htmlContent = htmlContent + '</div></body></html>'
        fs.writeFile("output/team.html", htmlContent, function (err) {
            if (err) {
                return err;
            }
            console.log("Team Html is ready");
            return;
            
        });
    });

}

module.exports.getMemberInfo = getMemberInfo;