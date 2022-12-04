const db = require('../services/db');

function getAllLocation(){
  const data = db.query('SELECT * FROM Location ');
  return data;
}

function getLocation (req){
  const data = db.query('SELECT * FROM location WHERE company_id = ? LIMIT ?,?', [req, 0, 10]);
  return data;
}

function updateLocation (req) {
  const data = db.query('', [req, 0, 10]);
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