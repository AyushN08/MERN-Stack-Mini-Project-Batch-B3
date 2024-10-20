const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const vaccineRoutes = require('./Routes/VaccineRoute');
const doctorRoutes = require('./Routes/DoctorRoutes');
const userVaccineRoutes = require('./Routes/userVaccine');
const otpRoutes = require('./Routes/otpRoutes'); // Import OTP routes

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/vaccines', vaccineRoutes);
app.use('/doctors', doctorRoutes);
app.use('/user-vaccines', userVaccineRoutes);
app.use('/otp', otpRoutes); // Use OTP routes

app.listen(PORT, () => {
   console.log(`Server is running on ${PORT}`);
});
