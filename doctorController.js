const db = require('../config/database');
const bcrypt = require('bcryptjs');


exports.addDoctor = async (req, res) => {
    const { id,first_name,last_name,specialization,schedule1 } = req.body;
    
    const query = 'INSERT INTO Doctors (id,first_name,last_name,specialization,schedule1) VALUES (?, ?, ?,?,?)';
    try {
        await db.execute(query, [id,first_name,last_name,specialization,schedule1]);
        res.status(201).json({ message: 'Doctor added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getDoctorsAvailable = async (req, res) => {
    const query = 'SELECT * FROM Doctors';
    try {
        const [Doctors] = await db.execute(query);
        res.json(Doctors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateDoctorSchedule = async (req, res) => {
    const { schedule1 } = req.body;

    const query = 'UPDATE Doctors SET schedule1 = ? WHERE id = ?';
    try {
        await db.execute(query, [schedule1,id ]);
        res.json({ message: 'Schedule updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deleteDoctorAccount = async (req, res) => {
    const doctorId = req.session.userId;

    const query = 'DELETE FROM Doctors WHERE id = ?';
    try {
        await db.execute(query, [doctorId]);
        req.session.destroy(); 
        res.json({ message: 'Account deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
