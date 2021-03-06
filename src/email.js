const nodemailer = require("nodemailer");
const { SMTP_PASSWORD, SMTP_USERNAME } = require("../server_config");

const transporter = nodemailer.createTransport({
  host: "email-smtp.us-west-1.amazonaws.com",
  port: 587,
  secure: false,
  connectionTimeout: 5000,
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD,
  },
});

module.exports = (msg) => {
  const mailOptions = {
    from: "peretz.itay@itayp-dev.com",
    to: "peretz.itay@gmail.com",
    subject: "price alert amazon",
    text: `price alert amazon \n ${msg}`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(JSON.stringify(data));
  });
};
