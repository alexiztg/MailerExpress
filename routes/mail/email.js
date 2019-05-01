"use strict";
const nodemailer = require("nodemailer");

module.exports.emailf=function (from, to, subject, text, html) {
    return new Promise(function(reject, resolve){

    async function main(){
    let testAccount = await nodemailer.createTestAccount();
  
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'alexis@gabssa.net', 
        pass: 'GABSSA2018' 
        }
    });
    let info = await transporter.sendMail({
        from: '"Duva 💪" <alexis@gabssa.net>', 
        to: to, 
        subject: subject, 
        text: text, 
        html: html
    });

        resolve({ err: false })

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

        main().catch(
            reject({ err:true })
        );
    })
}

