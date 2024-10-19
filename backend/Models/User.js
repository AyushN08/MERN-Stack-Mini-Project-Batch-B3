const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    childName: {
        type: String,
        required: true,
        minlength: 3, // Minimum length for child's name
        maxlength: 100 // Maximum length for child's name
    },
    birthDate: {
        type: Date,
        required: true,
    },
    parentMobile: {
        type: String,
        required: true,
        minlength: 10, // Minimum length for mobile number
        maxlength: 15 // Maximum length for mobile number
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // Convert to lowercase for consistency
        trim: true // Trim whitespace
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // Minimum length for password
        maxlength: 100 // Maximum length for password
    }
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Export the User model
const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
