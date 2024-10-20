
const express = require('express');
const appointmentRoutes = require('./routes/appointmentRoutes');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');  
const cors = require('cors'); 
const connectToDB = require('./database/db');

// Create an Express app
const app = express();

// Load environment variables
dotenv.config();
const corsOptions = {
    origin: true, // Allow requests from this origin
    credentials: true,
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));
// Connect to MongoDB
connectToDB();
app.use(bodyParser.json()); // Parse incoming requests with JSON payloads
app.use(express.json()); // To accept JSON payloads

// Routes
app.use('/api/appointments', appointmentRoutes);

// Defining port
const PORT = process.env.PORT;
//running the server on port 5000
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});