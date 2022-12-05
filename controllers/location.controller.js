const db = require('../services/db');

function getAllLocation(){
  const data = db.query('SELECT * FROM Location', []);
  return data;
}

function getLocation (req){
  const data = db.query('SELECT * FROM location WHERE company_id = ? ', [req]);
  return data;
}

function updateLocation (req) {
  const data = db.run('UPDATE Location SET location_name = ?, location_country = ?,  location_city = ?  WHERE company_id = ?;', [req.location_name, req.location_country, req.location_city, req.company_id]);
  return data;
}

function deleteLocation(req){
  const result = db.run('DELETE FROM location WHERE company_id = ? ;', [req]);
  return result;
}

module.exports = {
  getAllLocation,
  getLocation,
  updateLocation,
  deleteLocation
}