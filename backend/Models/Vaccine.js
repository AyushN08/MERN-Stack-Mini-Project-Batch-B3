// Models/Vaccine.js
const mongoose = require('mongoose');

// Define the vaccine schema
const VaccineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ageLimit: { type: String, required: true },
  govtPrice: { type: Number, required: true },
 
});

// Create and export the Vaccine model
const Vaccine = mongoose.model('Vaccine', VaccineSchema);

module.exports = Vaccine;

