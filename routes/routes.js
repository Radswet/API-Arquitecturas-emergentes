const express = require('express');
const router = express.Router();

const location = require('../controllers/location.controller');
const sensor = require('../controllers/sensor.controller');
const sensor_data = require('../controllers/sensor_data.controller');

// Routes location
router.get("/location/:id", function (req, res) {
  try {
    res.send({
      status: 201,
      message: location.getLocation(req.params.id, req.query.company_api_key)
    });
  } catch (err) {
    res.send({
      status: 500,
      message: err.message
    });
  }
});
router.get("/location", function (req, res) {
  try {
    res.send({
      status: 201,
      message: location.getAllLocation(req.query.company_api_key)
    });
  } catch (err) {
    res.send({
      status: 500,
      message: err.message
    });
  }
});
router.put("/location",function (req, res) {
  try {
    res.send({
      status: 201,
      message: location.updateLocation(req.body,  req.query.company_api_key)
    });
  } catch (err) {
    res.send({
      status: 500,
      message: err.message
    });
  }
});
router.delete("/location/:id", function (req, res, next) {
  try {
    res.send({
      status: 201,
      message: location.deleteLocation(req.params.id, req.query.company_api_key)
    });
  } catch (err) {
    res.send({
      status: 500,
      message: err.message
    });
  }
});


// Routes sensor
router.get("/sensor/:id", function (req, res) {
  try {
    res.send({
      status: 201,
      message: sensor.getSensor(req.params.id, req.query.company_api_key)
    });
  } catch (err) {
    res.send({
      status: 500,
      message: err.message
    });
  }
});
router.get("/sensor", function (req, res) {
  try {
    res.send({
      status: 201,
      message: sensor.getAllSensor(req.query.company_api_key)
    });
  } catch (err) {
    res.send({
      status: 500,
      message: err.message
    });
  }
});
router.put("/sensor", function (req, res) {
  try {
    res.send({
      status: 201,
      message: sensor.updateSensor(req.body, req.query.company_api_key)
    });
  } catch (err) {
    res.send({
      status: 500,
      message: err.message
    });
}});
router.delete("/sensor", function (req, res, next) {
  try {
    res.send({
      status: 201,
      message: sensor.deleteSensor(req.params.id, req.query.company_api_key)
    });
  } catch (err) {
    res.send({
      status: 500,
      message: err.message
    });
  }
});

//Routes Sensor_Data
router.post("/sensor_data", function (req, res) {
  try {
    res.send(sensor_data.createSensor_data(req.body));
  } catch (err) {
    res.send(err.message);
  }
});//insercion de sensor

router.get("/sensor_data", function (req, res) {
  try {
    res.send({
      status: 201,
      message: sensor_data.getSensor_data(req.body)
    });
  } catch (err) {
    res.send({
      status: 500,
      message: err.message
    });
  }
});//consulta de sensor


//router.put("/sensor_data", sensor_data.updateSensor_data);
//router.delete("/sensor_data", sensor_data.deleteSensor_data);



module.exports = router;
