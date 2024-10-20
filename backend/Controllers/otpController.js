const Doctor = require('../Models/DoctorModel'); // Import the existing Doctor model
const nodemailer = require('nodemailer');

let otpStorage = {}; // Store OTPs temporarily

// Function to send OTP
const sendOTP = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Gmail SMTP server
        port: 465, // Secure port for SSL/TLS
        secure: true, // Use SSL/TLS
        auth: {
            user: process.env.EMAIL_USER, // Your email address from environment variables
            pass: process.env.EMAIL_PASS, // Your email password or app-specific password
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP is: ${otp}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`OTP email sent to ${email}`);
    } catch (error) {
        console.error('Error sending OTP:', error.message);
        throw new Error('Error sending OTP'); // Propagate error to the caller
    }
};

// Request OTP
const requestOtp = async (req, res) => {
    const { email } = req.body;

    try {
        // Check if the email exists in the database
        const doctor = await Doctor.findOne({ email });
        if (!doctor) {
            return res.status(404).json({ message: 'Email not found in our records.' });
        }

        // Generate a 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Store OTP as a string
        otpStorage[email] = otp; // Store OTP temporarily as a string

        console.log(`Generated OTP for ${email}: ${otp}`); // Log OTP for debugging

        // Send OTP to the provided email
        await sendOTP(email, otp);

        res.status(200).json({ message: 'OTP sent to your email.' });
    } catch (error) {
        console.error('Error requesting OTP:', error.message);
        res.status(500).json({ message: 'Error processing your request.' });
    }
};

// Verify OTP
const verifyOtp = (req, res) => {
    const { email, otp } = req.body;

    console.log(`Verifying OTP for ${email}: ${otp}`); // Log incoming OTP for debugging
    console.log(`Stored OTP for ${email}: ${otpStorage[email]}`); // Log stored OTP for debugging

    // Check if the OTP exists and matches the stored one (both converted to string)
    if (otpStorage[email] && otpStorage[email] === otp.toString()) {
        delete otpStorage[email]; // Remove OTP after successful verification
        res.status(200).json({ message: 'OTP verified successfully!' });
    } else {
        res.status(400).json({ message: 'Invalid OTP or email.' });
    }
};

module.exports = { requestOtp, verifyOtp };
