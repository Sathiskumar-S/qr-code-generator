// inquirer npm package for getting input from the user
//qr-image npm package for generating qr-code images

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Enter the URL you want to convert:",
        name : "URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('url.png'));

    fs.writeFile("url.txt",url,(err)=>{
        if(err) throw err;
        console.log("File created successfully");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });