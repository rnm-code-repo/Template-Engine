const Manager = require('../Manager');
const Engineer = require('../Engineer');
const Intern = require('../Intern');
const Employee = require('../Employee')

function getMemberCard(memberData) {
    

    if (memberData instanceof Manager) {
        //console.log('In Manager section->' + Object.keys(memberData) + '--->' + Object.values(memberData) + '<---' + (memberData.getId()));

        return `<div class="card" style="margin-top: 25px;">
        <div class="cardmgr">
           <h3 style="margin-left: 10px;">Good Manager</h3>
            <h3 style="margin-left: 10px;">${memberData.getName()}</h3>
            <span style="margin-left: 10px;"><i class="fas fa-mug-hot fa-2x"style="color:wheat"></i>&nbsp;${memberData.getRole()}</span>
        </div>
        <div class="mgr">
        <h5>ID:&nbsp;${memberData.getId()}</h5>
        <h5>Email:&nbsp;${memberData.getEmail()}</h5>
        <h5>Office Number:&nbsp;${memberData.getOfficeNumber()}</h5>
        </div>
    </div>
    <div class="members">
    `;

    } else if (memberData instanceof Engineer) {
        return `
        <div class="memberscard" style="margin-top: 25px;">
        <div class="cardeng">
        <h3 style="margin-left: 10px;">Awesome Engineer</h3>
            <h3 style="margin-left: 10px;">${memberData.getName()}</h3>
            <span style="margin-left: 10px;"><i class="fas fa-glasses fa-2x" style="color:white;font-size: 25px;"></i>
                &nbsp;${memberData.getRole()}</span>
        </div>
        <div class="eng">
          <h5>ID:&nbsp;${memberData.getId()} </h5>
          <h5>Email:&nbsp;${memberData.getEmail()} </h5>
          <h5>Github:&nbsp;<a href="#" style="color:#fff;">${memberData.getGithub()}</a></h5>
        </div>
      </div>
        `

    } else {
        return `
            <div class="memberscard" style="margin-top: 25px;">
    <div class="cardint">
    <h3 style="margin-left: 10px;">Fabulous Intern</h3>
        <h3 style="margin-left: 10px;">${memberData.getName()}</h3>
        <span style="margin-left: 10px;"><i class="fas fa-graduation-cap fa-2x"
            style="color: whitesmoke; font-size: 25px;"></i>&nbsp;${memberData.getRole()}</span>
    </div>
    <div class="int">
      <h5>ID:&nbsp;${memberData.getId()} </h5>
      <h5>Email:&nbsp;${memberData.getEmail()} </h5>
      <h5>School:&nbsp;${memberData.getSchool()} </h5>
    </div>
  </div>
        `

    }

}

module.exports.getMemberCard = getMemberCard;