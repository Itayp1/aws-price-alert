const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "email-smtp.us-west-1.amazonaws.com",
  port: 25,
  secure: false,
  auth: {
    user: "AKIAYJQMZC5M4TA6D6EV",
    pass: "BLLmQv+K8Kq4pDzt9YVTYhN+v4niCh9cHhSWOue+YCvM",
  },
});

const mailOptions = {
  from: "peretz.itay@itayp-dev.com",
  to: "peretz.itay@gmail.com",
  subject: "test",
  text: "text",
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(JSON.stringify(data));
});
