// Routes/otpRoutes.js
const express = require('express');
const router = express.Router();
const otpController = require('../Controllers/otpController'); // Import your controller

// Define the POST route for requesting OTP
router.post('/request-otp', otpController.requestOtp);
router.post('/verify-otp', otpController.verifyOtp);

module.exports = router;
