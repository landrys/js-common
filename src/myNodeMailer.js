/*jslint node: true */
"use strict";
var nodemailer = require('nodemailer');
//var privateStuff = require('./private');

mudule.exports.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true
});

module.exports.mailIt = function (to, subject, body) {
    var mailOptions = {
        from: "landryseleven@gmail.com",
        to: to,
        subject: subject,
        text: body
    };

    exports.transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent to: " + to);
        }
    });
};
