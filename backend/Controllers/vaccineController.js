const Vaccine = require('../Models/Vaccine');
const mongoose = require('mongoose');

// Get all vaccines
const getVaccines = async (req, res) => {
  try {
    const vaccines = await Vaccine.find();
    res.json(vaccines);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Create a new vaccine
const createVaccine = async (req, res) => {
  try {
    const newVaccine = new Vaccine(req.body);
    const savedVaccine = await newVaccine.save();
    res.status(201).json(savedVaccine);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Update a vaccine by ID
const updateVaccine = async (req, res) => {
  try {
    const vaccineId = req.params.id.trim();

    // Validate ObjectID
    if (!mongoose.Types.ObjectId.isValid(vaccineId)) {
      return res.status(400).send("Invalid vaccine ID format.");
    }

    const updatedVaccine = await Vaccine.findByIdAndUpdate(vaccineId, req.body, { new: true });
    
    if (!updatedVaccine) {
      return res.status(404).send("Vaccine not found");
    }
    
    res.json(updatedVaccine);
  } catch (err) {
    console.error(err); // Log the original error for debugging
    res.status(400).send("Error updating vaccine. Please check the data provided.");
  }
};

// Delete a vaccine by ID
const deleteVaccine = async (req, res) => {
  try {
    const vaccineId = req.params.id.trim();
    
    // Validate ObjectID
    if (!mongoose.Types.ObjectId.isValid(vaccineId)) {
      return res.status(400).send("Invalid vaccine ID format.");
    }

    const deletedVaccine = await Vaccine.findByIdAndDelete(vaccineId);
    if (!deletedVaccine) {
      return res.status(404).send("Vaccine not found");
    }
    res.json({ message: "Vaccine deleted successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Get a vaccine by ID
const getVaccineById = async (req, res) => {
  const { id } = req.params;

  try {
    // Validate the ObjectID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid vaccine ID format.");
    }

    const vaccine = await Vaccine.findById(id);
    if (!vaccine) {
      return res.status(404).json({ message: 'Vaccine not found' });
    }
    res.json(vaccine);
  } catch (err) {
    res.status(500).send("Error retrieving vaccine.");
  }
};

// Export the controller functions
module.exports = {
  getVaccines,
  createVaccine,
  updateVaccine,
  deleteVaccine,
  getVaccineById,
};
