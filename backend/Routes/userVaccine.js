const express = require('express');
const router = express.Router();
const userVaccineController = require('../Controllers/userVaccineController');

// Route to assign a vaccine to a user
router.post('/', userVaccineController.assignVaccineToUser);

// Route to update vaccine completion status
router.put('/:userId/:vaccineId', userVaccineController.updateVaccineCompletion);

// Route to get all vaccines for a specific user
router.get('/:userId', userVaccineController.getVaccinesForUser);

module.exports = router;
