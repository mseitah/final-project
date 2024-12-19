const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.post('/register', patientController.registerPatient);
router.get('/', patientController.getAllPatients);
router.put('/profile', patientController.updatePatientProfile);
router.delete('/profile', patientController.deletePatientAccount);


module.exports = router;
