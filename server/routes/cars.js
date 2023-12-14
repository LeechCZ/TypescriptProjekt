const express = require('express');
const router = express.Router();
/**
 * Returns all cars
 * URL: http://localhost:3000/cars
 * Method: GET
 * req - request - request from user
 * res - response - response from server to user
 */
router.get('/', (req, res) => {
    res.send({
        msg: "Returning all cars"
    });
});

/**
 * Returns single car using id
 * URL: http://localhost:3000/cars/car_id
 * Method: GET
 * 
 * req.params.id - id from the URL
 */
router.get('/:id', (req, res) => {
    res.send({
        msg: "Returning single car",
        id: req.params.id
    });
});

/**
 * Adds car
 * URL: http://localhost:3000/cars
 * Method: POST
 */
router.post('/', (req, res) => {
    res.send({
        msg: "Adding car"
    });
});

/**
 * Updates car
 * URL: http://localhost:3000/cars/car_id
 * Method: PUT
 */
router.put('/:id', (req, res) => {
    res.send({
        msg: "Updating car",
        id: req.params.id
    });
});

/**
 * Deletes car
 * URL: http://localhost:3000/cars/car_id
 * Method: DELETE
 */
router.delete('/:id', (req, res) => {
    res.send({
        msg: "Deleting car",
        id: req.params.id
    });
});

module.exports = router;
