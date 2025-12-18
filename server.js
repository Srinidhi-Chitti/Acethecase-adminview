const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const connectDB = require('./src/config/database');

// Load env vars
dotenv.config();

// Import routes
const authRoutes = require('./src/routes/authRoutes');
const internshipRoutes = require('./src/routes/internshipRoutes');
const placementRoutes = require('./src/routes/placementRoutes');

// Initialize app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/internships', internshipRoutes);
app.use('/api/placements', placementRoutes);

// Default route
app.get('/', (req, res) => {
    res.json({ message: 'GITAM Career Portal API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        success: false, 
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : {}
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});