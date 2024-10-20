const express = require('express');
const router = express.Router();
const {
  getVaccines,
  createVaccine,
  updateVaccine,
  deleteVaccine,
  getVaccineById  // Import the getVaccineById function
} = require('../Controllers/vaccineController');

// Define the routes
router.get('/', getVaccines); // Get all vaccines
router.get('/:id', getVaccineById); // Get a specific vaccine by ID
router.post('/', createVaccine); // Create a new vaccine
router.put('/:id', updateVaccine); // Update a vaccine by ID
router.delete('/:id', deleteVaccine); // Delete a vaccine by ID

module.exports = router;
