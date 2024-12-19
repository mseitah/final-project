const db = require('../config/database');
const bcrypt = require('bcryptjs');


// Register a new patient
exports.registerPatient = async (req, res) => {
    const { first_name,last_name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const query = 'INSERT INTO Patients (first_name,last_name, email, password) VALUES (?, ?, ?,?)';
    try {
        await db.execute(query, [first_name, last_name, email, hashedPassword]);
        res.status(201).json({ message: 'Patient registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getAllPatients = async (req, res) => {
    const query = 'SELECT id, name, email FROM Patients';
    try {
        const [patients] = await db.execute(query);
        res.json(patients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updatePatientProfile = async (req, res) => {
    const { first_name } = req.body;
    const patientId = req.session.userId; 

    const query = 'UPDATE Patients SET first_name = ? WHERE id = ?';
    try {
        await db.execute(query, [name, patientId]);
        res.json({ message: 'Profile updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deletePatientAccount = async (req, res) => {
    const patientId = req.session.userId;

    const query = 'DELETE FROM Patients WHERE id = ?';
    try {
        await db.execute(query, [patientId]);
        req.session.destroy(); 
        res.json({ message: 'Account deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
