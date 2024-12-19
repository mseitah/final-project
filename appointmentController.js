const db = require('../config/database');
const bcrypt = require('bcryptjs');

exports.createAppointment = async (req, res) => {
    const { doctor_id,appointment_date,appointment_time } = req.body;
    
    const query = 'INSERT INTO Appointments (doctor_id,appointment_date,appointment_time) VALUES (?, ?, ?,)';
    try {
        await db.execute(query, [doctor_id,appointment_date,appointment_time]);
        res.status(201).json({ message: 'Appointment booked successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getAllAppointments = async (req, res) => {
    const query = 'SELECT * FROM Appointments';
    try {
        const [Appointments] = await db.execute(query);
        res.json(Appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateAppointment = async (req, res) => {
    const { status1 } = req.body;

    const query = 'UPDATE Appointments SET status1 = ? WHERE patient_id = ?';
    try {
        await db.execute(query, [status1,patient_id ]);
        res.json({ message: 'Appointment status' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.cancelAppointment = async (req, res) => {
    const { status1 } = req.body;

    const query = 'DELETE FROM Appointments WHERE patient_id = ?';
    try {
        await db.execute(query, [status1,patient_id]);
        res.json({ message: 'Appointment cancelled successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};