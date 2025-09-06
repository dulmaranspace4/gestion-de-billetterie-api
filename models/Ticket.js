const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  purchaser: { type: String, required: true },
  numberOfTickets: { type: Number, required: true },
  purchaseDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);