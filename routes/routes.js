const express = require('express');
const router = express.Router();
const quotes = require('../services/quotes');

const location = require('../controllers/location.controller');
const sensor = require('../controllers/sensor.controller');
const sensor_data = require('../controllers/sensor_data.controller');

// Routes location
router.get("/location/:id", function (req, res) {
  try {
    res.send({
      status: 201,
      message: location.getLocation(req.params.id)
    });
  } catch (err) {
    res.send({
      status: 500,
      message: err.message
    });
  }
});
router.get("/location", function (req, res, next) {
  try {
    res.send({
      status: 201,
      message: location.getAllLocation()
    });
  } catch (err) {
    res.send({
      status: 500,
      message: err.message
    });
  }
});
router.put("/location", location.updateLocation);
router.delete("/location/:id", function (req, res, next) {
  try {
    res.send({
      status: 201,
      message: location.deleteLocation(req.params.id)
    });
  } catch (err) {
    res.send({
      status: 500,
      message: err.message
    });
  }
});

// Routes sensor
router.get("/sensor:id", sensor.getSensor);
router.get("/sensor", sensor.getAllSensor);
router.put("/sensor", sensor.updateSensor);
router.delete("/sensor", sensor.deleteSensor);

//Routes Sensor_Data
router.post("/sensor_data", sensor_data.createSensor_data);//insercion de sensor
router.get("/sensor_data:id", sensor_data.getSensor_data);//consulta de sensor
router.get("/sensor_data", sensor_data.getAllSensor_data);//
router.put("/sensor_data", sensor_data.updateSensor_data);
router.delete("/sensor_data", sensor_data.deleteSensor_data);



module.exports = router;
