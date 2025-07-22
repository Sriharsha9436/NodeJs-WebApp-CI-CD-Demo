const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Simple API endpoint
app.get('/api/data', (req, res) => {
    console.log('API /api/data hit!');
    res.json({ message: 'Hello from the Node.js API!', timestamp: new Date().toISOString() });
});

// Basic error handling for undefined routes
app.use((req, res, next) => {
    res.status(404).send("Sorry, that route doesn't exist.");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});