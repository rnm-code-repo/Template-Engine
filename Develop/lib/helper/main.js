function getMainHtml() {
    return `<!DOCTYPE html>
    <html>
    
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.11/css/all.css">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.0/css/all.css">
    
    
      <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
        }
    
        .image-container {
          background-image: url("../assets/designer_coder.png");
          position: relative;
            height: 150px;
            font-size: smaller;
            border-radius: 10px;
            background-repeat: no-repeat;
            align-items: center;
            background-color: brown;
        }

        .text {
            background-color: #5599c9;
            color: black;
            border-radius: 10px;
            font-size: 5vw;
            font-weight: bold;
            margin: 0 auto;
            padding: 10px;
            width: 37%;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 57%;
            transform: translate(-50%, -50%);
            mix-blend-mode: screen;
            float: right;
        }
    
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          transition: 0.3s;
          width: 25%;
          margin: auto;
          padding: 10px;
        }
        
        .members {
            flex-flow: row;
            display: grid;
            grid-template-columns: 25% 25% 25%;
            grid-gap: 10px;
            flex-flow: center;
            justify-content: center;
          }

          .memberscard {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            transition: 0.3s;
            padding: 10px;
          }
        .cardmgr {
          width: 100%;
          padding: 1px 0px 1px;
          background:rgb(150, 57, 88);
          color: white;
          border-radius: 5px;
        }
    
        .cardeng {
          width: 100%;
          padding: 1px 0px 1px;
          background:rgb(163, 75, 137);
          color: white;
          border-radius: 5px;
        }
    
        .cardint {
          width: 100%;
          padding: 1px 0px 1px;
          background: palevioletred;
          color: white;
          border-radius: 5px;
        }
    
        .mgr {
          width: 100%;
          padding: 10px 0px 10px;
          background:rgb(85, 80, 80);
          color: white;
          border-radius: 5px;
          margin-top: 3px;
    
        }
    
        .eng {
          width: 100%;
          padding: 10px 0px 10px;
          background:  rgb(85, 80, 80);
          color: white;
          border-radius: 5px;
          margin-top: 3px;
        }
    
        .int {
          width: 100%;
          padding: 10px 0px 10px;
          background: rgb(85, 80, 80);
          color: white;
          border-radius: 5px;
          margin-top: 3px;
        }
    
        h5 {
          padding-left: 15px;
          border-bottom: #0000002e;
          border-bottom-style: solid;
          border-width: thin;
        }
    
        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }
    
        .container {
          padding: 2px 16px;
        }

        h3{
           text-align:center; 
        }
      </style>
      
    </head>
    
    <body>
    
      <div class="image-container">
        <div class="text">TEAM:CODERS </div>
      </div>`;
}

module.exports.getMainHtml = getMainHtml;