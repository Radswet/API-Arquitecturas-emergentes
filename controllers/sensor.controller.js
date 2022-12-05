const db = require('../services/db');

function getSensor (req, params){
  const query = db.query('SELECT * FROM Company WHERE company_api_key = ? ', [params]);
    
  if(query.length  <1){
    return "No es valida la company api key"
  }
  const data = db.query('SELECT * FROM Sensor WHERE location_id = ? ', [req]);
  return data;
}

function getAllSensor(params){
  const query = db.query('SELECT * FROM Company WHERE company_api_key = ? ', [params]);
    
  if(query.length  <1){
    return "No es valida la company api key"
  }
  const data = db.query('SELECT * FROM Sensor', []);
  return data;
}

function updateSensor (req, params) {

  const query = db.query('SELECT * FROM Company WHERE company_api_key = ? ', [params]);
    
  if(query.length  <1){
    return "No es valida la company api key"
  }

  const data = db.run('UPDATE Sensor SET location_id = ?, sensor_id = ?, sensor_name = ?, sensor_category = ?, sensor_meta = ?, sensor_api_key = ?, req.sensor_id = ?  WHERE sensor_id = ?;', [req.location_id, req.sensor_id, req.sensor_name, req.sensor_category, req.sensor_meta, req.sensor_api_key, req.sensor_id]);
  return data;
}

function deleteSensor(req){
  const query = db.query('SELECT * FROM Company WHERE company_api_key = ? ', [params]);
    
  if(query.length  <1){
    return "No es valida la company api key"
  }

  const result = db.run('DELETE FROM Sensor WHERE sensor_id = ? ;', [req]);
  return result;
}
module.exports = {  
  getSensor,
  getAllSensor,
  updateSensor,
  deleteSensor
}