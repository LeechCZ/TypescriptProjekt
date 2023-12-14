const express = require("express");
const router = express.Router();

const carsController = require("../controllers/cars");
/**
 * Returns all cars
 * URL: http://localhost:3000/cars
 * Method: GET
 * req - request - request from user
 * res - response - response from server to user
 */
router.get("/", carsController.getAllCars);

/**
 * Returns single car using id
 * URL: http://localhost:3000/cars/car_id
 * Method: GET
 *
 * req.params.id - id from the URL
 */
router.get("/:id", carsController.getCarById);

/**
 * Adds car
 * URL: http://localhost:3000/cars
 * Method: POST
 */
router.post("/", carsController.createCar);

/**
 * Updates car
 * URL: http://localhost:3000/cars/car_id
 * Method: PUT
 */
router.put("/:id", carsController.updateCar);

/**
 * Deletes car
 * URL: http://localhost:3000/cars/car_id
 * Method: DELETE
 */
router.delete("/:id", carsController.deleteCar);

module.exports = router;
