const db = require('../services/db');

function createSensor_data (req){
  try {

    /*
    La inserción de sensor_data debe tener la siguiente estructura:
      oPOST /api/v1/sensor_data
      oInsertar datos ocupando el sensor_api_key como mecanismo de autorización.
      o Debe retornar Status HTTP 201 (created)
    */
    //return status 201
  } catch (error) {
    return({
      status: 500, 
      message: error.message
    });
  }
}

function getSensor_data(req){
  try {
    /*
      La autorización será posible mediante el uso de un Header HTTP o puede tener un parámetro en la URL &company_api_key=
        ▪from = < marca de tiempo en formato EPOCH >
        ▪to = < marca de tiempo en formato EPOCH >
        ▪sensor_id = [2,3,4,5,10,220] (Arreglo de sensor_id para los cuales se consultan los sensor_data)
    */
    //return status 201
    return res.status(201).json({ message: "hola" });
  } catch (error) {
    return({
      status: 500, 
      message: error.message
    });
  }
}

function getAllSensor_data (req) {
  try {

    return res.status(201).json({ message: "hola" });
  } catch (error) {
    return({
      status: 500, 
      message: error.message
    });
  }
}

function updateSensor_data (req){
  try {

    //return status 201
  } catch (error) {
    return({
      status: 500, 
      message: error.message
    });
  }
}

function deleteSensor_data (req) {
  try {

    //return status 201
  } catch (error) {
    return({
      status: 500, 
      message: error.message
    });
  }
}

module.exports = {
  createSensor_data,
  getSensor_data,
  getAllSensor_data,
  updateSensor_data,
  deleteSensor_data
}