const db = require('../services/db');

function getAllLocation(params){
  const query = db.query('SELECT * FROM Company WHERE company_api_key = ? ', [params]);
    
  if(query.length  <1){
    return "No es valida la company api key"
  }

  const data = db.query('SELECT * FROM Location', []);
  return data;
}

function getLocation (req, params){
  const query = db.query('SELECT * FROM Company WHERE company_api_key = ? ', [params]);
    
  if(query.length  <1){
    return "No es valida la company api key"
  }

  const data = db.query('SELECT * FROM location WHERE company_id = ? ', [req]);
  return data;
}

function updateLocation (req, params) {
  const query = db.query('SELECT * FROM Company WHERE company_api_key = ? ', [params]);
    
  if(query.length  <1){
    return "No es valida la company api key"
  }
  const data = db.run('UPDATE Location SET location_name = ?, location_country = ?,  location_city = ?  WHERE company_id = ?;', [req.location_name, req.location_country, req.location_city, req.company_id]);
  return data;
}

function deleteLocation(req, params){
  const query = db.query('SELECT * FROM Company WHERE company_api_key = ? ', [params]);
    
  if(query.length  <1){
    return "No es valida la company api key"
  }

  const result = db.run('DELETE FROM location WHERE company_id = ? ;', [req]);
  return result;
}

module.exports = {
  getAllLocation,
  getLocation,
  updateLocation,
  deleteLocation
}