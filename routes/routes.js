import { Router } from "express";

import {
  getAllLocation,
  getLocation,
  updateLocation,
  deleteLocation,
} from "../controllers/location.controller.js";

import {
  getSensor,
  getAllSensor,
  updateSensor,
  deleteSensor,
} from "../controllers/sensor.controller.js";

import {
  createSensor_data,
  getSensor_data,
  getAllSensor_data,
  updateSensor_data,
  deleteSensor_data
} from "../controllers/sensor_data.controller.js";

const router = Router();



// Routes location
router.get("/location:id", getLocation);
router.get("/location", getAllLocation);
router.put("/location", updateLocation);
router.delete("/location", deleteLocation);

// Routes sensor
router.get("/sensor:id", getSensor);
router.get("/sensor", getAllSensor);
router.put("/sensor", updateSensor);
router.delete("/sensor", deleteSensor);

//Routes Sensor_Data
router.post("/sensor_data", createSensor_data);//insercion de sensor
router.get("/sensor_data:id", getSensor_data);//consulta de sensor
router.get("/sensor_data", getAllSensor_data);//
router.put("/sensor_data", updateSensor_data);
router.delete("/sensor_data", deleteSensor_data);

export default router;