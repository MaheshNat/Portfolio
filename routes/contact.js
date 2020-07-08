const express = require('express');
const router = express.Router();
require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

router.post('/', (req, res) => {
  const mailOptions = {
    from: req.body.from,
    to: process.env.PRIMARY_EMAIL,
    subject: req.body.subject,
    text: `Reason: ${req.body.reason} | Email: ${req.body.from}\n${req.body.message}`,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) console.log(err);
    else {
      console.log(`email ${req.body.subject} sent by ${req.body.email}`);
      res.json({ message: 'Sent Message.' });
    }
  });
});

module.exports = router;
