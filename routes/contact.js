const express = require('express');
const router = express.Router();
require('dotenv').config();
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const sendEmailLimiter = rateLimit({
  windowMs: parseInt(process.env.EMAIL_RATE_LIMITER_WINDOW) * 1000,
  max: parseInt(process.env.EMAIL_RATE_LIMITER_RATES),
  message: 'Too many emails sent from this IP, please try again after an hour',
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

router.post('/', sendEmailLimiter, (req, res) => {
  const mailOptions = {
    from: req.body.from,
    to: process.env.PRIMARY_EMAIL,
    subject: req.body.subject,
    text: `Reason: ${req.body.reason} | Email: ${req.body.from} | Name: ${req.body.name}\n${req.body.message}`,
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
