const express = require('express');
const router = express.Router();
const Vaccine = require('../Models/Vaccine'); // Ensure you import the Vaccine model
const {
  getVaccines,
  createVaccine,
  updateVaccine,
  deleteVaccine,
  getVaccineById,
} = require('../Controllers/vaccineController');

// Define the routes
router.get('/', getVaccines); // Get all vaccines
router.get('/:id', getVaccineById); // Get a specific vaccine by ID
router.post('/', createVaccine); // Create a new vaccine
router.put('/:id', updateVaccine); // Update a vaccine by ID
router.delete('/:id', deleteVaccine); // Delete a vaccine by ID

// Route to add multiple vaccines in bulk
router.post('/bulk', async (req, res) => {
  try {
    const vaccines = req.body; // Get the array of vaccines from the request body
    const createdVaccines = await Vaccine.insertMany(vaccines); // Insert all vaccines into the database
    res.status(201).json({ success: true, data: createdVaccines });
  } catch (error) {
    console.error("Error adding vaccines:", error);
    res.status(500).json({ success: false, message: "Error adding vaccines" });
  }
});

module.exports = router;
