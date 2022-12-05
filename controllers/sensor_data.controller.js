const db = require('../services/db');

function createSensor_data(req) {
  try {
    const { sensor_api_key, sensor_id, variable1, variable2 } = req;
    
    const query = db.query('SELECT * FROM Sensor WHERE sensor_id = ? AND sensor_api_key = ? ', [sensor_id, sensor_api_key]);
    
    if(query.length  <1){
      return {
        statucode: 500,
        message: "No se encontró el sensor"
      };;
    }

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

function getSensor_data(body, params) {
  try {
    const { from, to, sensor_id } = body;

    let result = {};
    sensor_id.forEach(element => {
      const data = db.query('SELECT * FROM Sensor_data WHERE sensor_id = ? AND time BETWEEN ? AND ?', [element, from, to]);
      if (data.length > 0) {
        result[element] = data;  
      }
    });
  
    return { result };
  } catch (error) {

    return {
      statucode: 500,
      message: error.message
    };
  }
}



function updateSensor_data(req, params) {

  const query = db.query('SELECT * FROM Company WHERE company_api_key = ? ', [params]);
    
  if(query.length  <1){
    return "No es valida la company api key"
  }

  const data = db.run('UPDATE Sensor_data SET variable1 = ?, variable2 = ?  WHERE sensor_id = ?;', [req.variable1, req.variable2, req.sensor_id]);
  return data;
}

function deleteSensor_data(req, params){
  const query = db.query('SELECT * FROM Company WHERE company_api_key = ? ', [params]);
    
  if(query.length  <1){
    return "No es valida la company api key"
  }

  const result = db.run('DELETE FROM Sensor_data WHERE sensor_id = ? ;', [req]);
  return result;
}

module.exports = {
  createSensor_data,
  getSensor_data,
  updateSensor_data,
  deleteSensor_data
}