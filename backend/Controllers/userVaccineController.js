const UserVaccine = require('../Models/UserVaccine'); // Import UserVaccine model

// Assign a vaccine to a user
exports.assignVaccineToUser = async (req, res) => {
    const { userId, vaccineId } = req.body;

    try {
        const userVaccine = new UserVaccine({
            userId,
            vaccineId,
            isCompleted: false  // Initially set to false
        });

        await userVaccine.save();
        return res.status(201).json({ message: 'Vaccine assigned to user', userVaccine });
    } catch (error) {
        return res.status(500).json({ error: 'Error assigning vaccine', details: error });
    }
};

// Update vaccine completion status
exports.updateVaccineCompletion = async (req, res) => {
    const { userId, vaccineId } = req.params;

    try {
        const userVaccine = await UserVaccine.findOneAndUpdate(
            { userId, vaccineId },
            { isCompleted: true, completionDate: new Date() },
            { new: true }  // Return the updated document
        );

        if (!userVaccine) {
            return res.status(404).json({ error: 'UserVaccine record not found' });
        }

        return res.json({ message: 'Vaccine status updated', userVaccine });
    } catch (error) {
        return res.status(500).json({ error: 'Error updating vaccine status', details: error });
    }
};

// Get all vaccines for a specific user
exports.getVaccinesForUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const userVaccines = await UserVaccine.find({ userId }).populate('vaccineId'); // Populate vaccine details
        return res.json(userVaccines);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching user vaccines', details: error });
    }
};
