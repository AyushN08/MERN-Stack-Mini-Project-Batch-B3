const nodemailer = require('nodemailer');

// Use your environment variables or hardcoded values (for testing)
const EMAIL_USER = 'himanshugarga.d@gmail.com';
const EMAIL_PASS = 'kvhu qxfm zmxr qzat'; // This is the app-specific password, not your regular Gmail password

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail service
  port: 587, // TLS port
  secure: false, // Use TLS
  auth: {
    user: EMAIL_USER, // Your Gmail account
    pass: EMAIL_PASS  // Your generated app password
  },
});

// Define email options
let mailOptions = {
  from: EMAIL_USER, // Sender address
  to: 'nayak.ap@somaiya.edu', // List of receivers (replace with a real email)
  subject: 'Test Email', // Subject line
  text: 'landing page ka satyanash kar diya', // Plain text body
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Message sent:', info.response);
});
