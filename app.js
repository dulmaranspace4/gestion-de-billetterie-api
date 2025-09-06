
const express = require('express');
const eventRoutes = require('./routes/eventRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.json());
app.use('/api/events', eventRoutes);
app.use('/api/tickets', ticketRoutes);

module.exports = app;