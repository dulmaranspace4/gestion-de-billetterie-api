const express = require('express');
const eventRoutes = require('./routes/eventRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();
app.use(express.json());
app.use('/api/events', eventRoutes);
app.use('/api/tickets', ticketRoutes);

module.exports = app;