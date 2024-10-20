const express = require('express');
const router = express.Router();
const {
    getAllDoctors,
    createDoctor,
    updateDoctor,
    deleteDoctor,
    getDoctorById
} = require('../Controllers/DoctorController'); // Ensure this path is correct

// Define the routes
router.get('/', getAllDoctors);           // Get all doctors
router.post('/', createDoctor);            // Create a new doctor
router.get('/:id', getDoctorById);         // Get a specific doctor by ID
router.put('/:id', updateDoctor);          // Update a doctor by ID
router.delete('/:id', deleteDoctor);       // Delete a doctor by ID

module.exports = router;
