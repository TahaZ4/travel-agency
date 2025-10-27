const express = require('express');
const {
    createTrip,
    retrieveTrips,
    retrieveTripById,
    updateTripById,
    deleteTripById
} = require('../controllers/TripController');
const tripRouter = express.Router();

tripRouter
.route('/')
.post(createTrip)
.get(retrieveTrips);

tripRouter
.route('/:id')
.get(retrieveTripById)
.put(updateTripById)
.delete(deleteTripById);

module.exports = tripRouter;
