const inquirer = require("inquirer");
const fs = require('fs');
const membersInfo = require('./lib/helper/memberInfo')
const manager = require('./lib/Manager')
const mainHtml = require('./lib/helper/main')
const members = require('./lib/helper/members')

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
    return false||"Enter a valid string";
}
const email = async (input) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(input)||"Enter a valid @.com";
}

var htmlContent = mainHtml.getMainHtml();

inquirer.prompt([{
        type: "input",
        name: "id",
        message: "Hello Manager, please enter your id",
        validate: confirmNum,
        
    },
    {
        type: "input",
        name: "name",
        message: "Please enter the name of manager",
        validate: confirmNonNum,
        
    },

    {
        type: "input",
        name: "officeNumber",
        message: "Please enter your office number",
        validate: confirmNum,
       
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your Email",
        validate: email,
        
    }

]).then(async function (data) {
    
    var mgr = new manager(data.name, data.id, data.email, data.officeNumber);
    htmlContent = htmlContent + members.getMemberCard(mgr);


    htmlContent = htmlContent + membersInfo.getMemberInfo(htmlContent);
      /*  
        , async function(){
        writeFile(htmlContent);
    });
    
    async function writeFile(htmlContent) {
        console.log('writign file')
        fs.writeFile("output/team.html", htmlContent, function (err) {
            if (err) {
                return err;
            }
            

        });
    }*/
});