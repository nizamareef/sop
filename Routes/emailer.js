const nodemailer = require('nodemailer');
require('dotenv').config(); 

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL, 
    pass: process.env.PASSWORD,
  },
});

module.exports = transporter;
