const nodemailer = require('nodemailer');

const sendEmail = async (mailOptions) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASSWORD, 
      },
    });

    // Send the email
    await transporter.sendMail(mailOptions);
     
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending email:', error.message);
    return false;
  }
};

module.exports = sendEmail;