const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

// Acheter un billet
router.post('/', async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).send(ticket);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Obtenir tous les billets
router.get('/', async (req, res) => {
  const tickets = await Ticket.find();
  res.send(tickets);
});

module.exports = router;