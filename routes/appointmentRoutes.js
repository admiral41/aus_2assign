// routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointmentController');
const sendConfirmationEmail = require('../middleware/sendEmail');

router.post('/book', sendConfirmationEmail, appointmentController.bookAppointment);

module.exports = router;
