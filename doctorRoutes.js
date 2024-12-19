const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.post('/profile', doctorController.addDoctor);
router.get('/', doctorController.getDoctorsAvailable);
router.put('/schedule', doctorController.updateDoctorSchedule);
router.delete('/profile', doctorController.deleteDoctorAccount);

module.exports = router;
