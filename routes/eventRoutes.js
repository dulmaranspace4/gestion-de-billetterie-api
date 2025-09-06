const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Créer un événement
router.post('/', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).send(event);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Obtenir tous les événements
router.get('/', async (req, res) => {
  const events = await Event.find();
  res.send(events);
});

module.exports = router;