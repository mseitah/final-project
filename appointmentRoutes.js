const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.post('/create', appointmentController.createAppointment);
router.get('/', appointmentController.getAllAppointments);
router.put('/appointment', appointmentController.updateAppointment);
router.delete('/appointment', appointmentController.cancelAppointment);

module.exports = router;
