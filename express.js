const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const patientsRoutes = require('./routes/patientRoutes');
const doctorsRoutes = require('./routes/doctorRoutes');
const appointmentsRoutes = require('./routes/appointmentRoutes');
const adminRoutes = require('./routes/adminRoutes');


app.use(bodyParser.json());


app.use('/patients', patientsRoutes);
app.use('/doctors', doctorsRoutes);
app.use('/appointments', appointmentsRoutes);
app.use('/admin', adminRoutes);

app.post('/patients/register', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.status(201).json({ message: 'Patient registered successfully' });
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
