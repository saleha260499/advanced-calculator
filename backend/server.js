const express = require('express');
const cors = require('cors');
const calculatorRoutes = require('./routes/calculator');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', calculatorRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
