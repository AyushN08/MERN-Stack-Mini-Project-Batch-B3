const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");

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
        await userModel.save();
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

module.exports = {
    signup,
    login
};
