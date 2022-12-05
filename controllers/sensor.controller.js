const db = require('../services/db');

function getSensor (req){
  const data = db.query('SELECT * FROM Sensor WHERE location_id = ? ', [req]);
  return data;
}

function getAllSensor(){
  const data = db.query('SELECT * FROM Sensor', []);
  return data;
}

function updateSensor (req) {
  const data = db.run('UPDATE Sensor SET location_id = ?, sensor_id = ?, sensor_name = ?, sensor_category = ?, sensor_meta = ?, sensor_api_key = ?, req.sensor_id = ?  WHERE sensor_id = ?;', [req.location_id, req.sensor_id, req.sensor_name, req.sensor_category, req.sensor_meta, req.sensor_api_key, req.sensor_id]);
  return data;
}

function deleteSensor(req){
  const result = db.run('DELETE FROM Sensor WHERE sensor_id = ? ;', [req]);
  return result;
}


function createSensor (req) {
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
  getSensor,
  getAllSensor,
  updateSensor,
  deleteSensor,
  createSensor
}