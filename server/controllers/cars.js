const Car = require("../models/cars");

exports.getAllCars = (req, res) => {
  res.send({
    msg: "Returning all cars",
  });
};

exports.getCarById = (req, res) => {
  res.send({
    msg: "Returning single car",
    id: req.params.id,
  });
};

exports.createCar = async (req, res) => {
  try {
    const data = new Car({
      name: req.body.name,
      color: req.body.color,
      horsepower: req.body.horsepower,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Car created",
        payload: result,
      });
    }
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateCar = (req, res) => {
  res.send({
    msg: "Updating car",
    id: req.params.id,
  });
};

exports.deleteCar = (req, res) => {
  res.send({
    msg: "Deleting car",
    id: req.params.id,
  });
};
