const nodemailer = require('nodemailer');

const sendConfirmationEmail = async (req, res, next) => {
    const { studentName, email, instructor, timeSlot } = req.body;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_PORT === '465',
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: email,
        subject: 'Appointment Confirmation',
        text: `Hi ${studentName}, your appointment with ${instructor} is confirmed for ${new Date(timeSlot).toLocaleString()}.`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending confirmation email.' });
    }
};

module.exports = sendConfirmationEmail;
