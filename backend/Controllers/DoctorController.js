const Doctor = require('../Models/DoctorModel');

// Get all doctors
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a doctor
exports.createDoctor = async (req, res) => {
    const { name, specialization, email, phone } = req.body;
    const newDoctor = new Doctor({ name, specialization, email, phone });

    try {
        await newDoctor.save();
        res.status(201).json(newDoctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a doctor
exports.updateDoctor = async (req, res) => {
    const { id } = req.params;
    const { name, specialization, email, phone } = req.body;

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, { name, specialization, email, phone }, { new: true });
        if (!updatedDoctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json(updatedDoctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a doctor
exports.deleteDoctor = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(id);
        if (!deletedDoctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json({ message: 'Doctor deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single doctor by ID
exports.getDoctorById = async (req, res) => {
    const { id } = req.params;

    try {
        const doctor = await Doctor.findById(id);
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
