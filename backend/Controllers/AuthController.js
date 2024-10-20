const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");
const VaccineModel = require("../Models/Vaccine");
const UserVaccineModel = require("../Models/UserVaccine"); // Import UserVaccine model

// Signup function
const signup = async (req, res) => {
    try {
        const { childName, birthDate, parentMobile, parentEmail, password, confirmPassword } = req.body;

        // Check if user already exists
        const existingUser = await UserModel.findOne({ email: parentEmail });
        if (existingUser) {
            return res.status(409).json({
                message: 'User already exists, you can login',
                success: false
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const userModel = new UserModel({
            childName,
            email: parentEmail,
            password: hashedPassword,
            birthDate,
            parentMobile
        });

        // Save user to database
        const savedUser = await userModel.save();

        // Automatically assign all vaccines to the new user
        const vaccines = await VaccineModel.find(); // Fetch all vaccines
        const userVaccines = vaccines.map(vaccine => ({
            userId: savedUser._id,
            vaccineId: vaccine._id,
            isCompleted: false
        }));

        // Insert user-vaccine entries
        await UserVaccineModel.insertMany(userVaccines);

        res.status(201).json({
            message: "Signup successful",
            success: true
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// Login function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(403).json({
                message: 'Authentication failed, email or password is incorrect',
                success: false
            });
        }

        // Verify password
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({
                message: 'Authentication failed, email or password is incorrect',
                success: false
            });
        }

        // Generate JWT token
        const secret = process.env.JWT_SECRET || 'yourFallbackSecret';
        const jwtToken = jwt.sign(
            { _id: user._id }, // Store only the user ID in token
            secret,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            email,
            name: user.childName // Update field name to match the schema
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// New function to get user ID by email
const getUserIdByEmail = async (req, res) => {
    try {
        const { email } = req.query; // Get email from query parameters

        // Find user by email
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
                success: false
            });
        }

        // Respond with the user ID
        res.status(200).json({
            _id: user._id,
            message: 'User ID retrieved successfully',
            success: true
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

module.exports = {
    signup,
    login,
    getUserIdByEmail // Export the new function
};
