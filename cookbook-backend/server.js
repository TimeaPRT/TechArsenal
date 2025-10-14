const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/recipes', require('./routes/recipes'));

// Basic route
app.get('/', (req, res) => {
    res.json({ 
        message: "CookBook Digital API is running!",
        endpoints: {
            getRecipes: "GET /api/recipes",
            addRecipe: "POST /api/recipes",
            getRecipe: "GET /api/recipes/:id",
            updateRecipe: "PUT /api/recipes/:id", 
            deleteRecipe: "DELETE /api/recipes/:id"
        }
    });
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cookbook')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});