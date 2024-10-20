const mongoose = require('mongoose');

// Define the user-vaccine relationship schema
const UserVaccineSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,  // Reference to the User model
    ref: 'User',
    required: true
  },
  vaccineId: {
    type: mongoose.Schema.Types.ObjectId,  // Reference to the Vaccine model
    ref: 'Vaccine',
    required: true
  },
  isCompleted: {
    type: Boolean,  // Whether the vaccine has been completed by this user
    default: false
  },
  completionDate: {
    type: Date  // Optional: store the date when the vaccine was marked as completed
  }
}, { timestamps: true });  // Automatically manage createdAt and updatedAt fields

// Create and export the UserVaccine model only if it does not exist
const UserVaccine = mongoose.models.UserVaccine || mongoose.model('UserVaccine', UserVaccineSchema);
module.exports = UserVaccine;
