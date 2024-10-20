// controller/appointmentController.js
const Session = require('../models/SessionSchema');

// Function to book an appointment
exports.bookAppointment = async (req, res) => {
    try {
        const { studentName, instructor, timeSlot, reason, email } = req.body;

        // Create a new appointment
        const session = new Session({
            studentName,
            instructor,
            timeSlot,
            reason,
            email,
        });

        await session.save();

        return res.status(201).json({
            message: `Hi ${studentName}, your appointment is confirmed with ${instructor}.`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
