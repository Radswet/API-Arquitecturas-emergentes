const db = require('../services/db');

function createSensor_data(req) {
  try {
    const { sensor_api_key, sensor_id, value } = req;
    
    const query = db.query('SELECT * FROM Sensor WHERE sensor_id = ? AND sensor_api_key = ? ', [sensor_id, sensor_api_key]);
    
    if(query.length  <1){
      return {
        statucode: 500,
        message: "No se encontró el sensor"
      };;
    }

    const result = db.run('INSERT INTO sensor_data (sensor_id,  value) VALUES (@sensor_id,@value )', { sensor_id, value });

    let message = 'se ha añadido la data del sensor';
    if (result.changes) {
      return {
        statucode: 201,
        message: "Se ha añadido la data del sensor"
      };
    }
    return { message };
  } catch (error) {

    return {
      statucode: 500,
      message: error.message
    };
  }
}

function getSensor_data(req) {
  try {
    const { sensor_api_key, sensor_id, variable1 , variable2 } = req;
    const result = db.run('INSERT INTO sensor_data (sensor_id,  variable1, variable2) VALUES (@sensor_id,@variable1, @variable2 )', { sensor_id, variable1, variable2 });

    let message = 'se ha añadido la data del sensor';
    if (result.changes) {
      return {
        statucode: 201,
        message: "Se ha añadido la data del sensor"
      };
    }
    return { message };
  } catch (error) {

    return {
      statucode: 500,
      message: error.message
    };
  }
}

function getAllSensor_data() {
  const data = db.query('SELECT * FROM Sensor_data', []);
  return data;
}

function updateSensor_data(req) {
  try {

    //return status 201
  } catch (error) {
    return ({
      status: 500,
      message: error.message
    });
  }
}

function deleteSensor_data(req) {
  try {

    //return status 201
  } catch (error) {
    return ({
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