const db = require('../services/db');

function getMultiple(page = 1) {
  const offset = (page - 1) * 10;
  const data = db.query(`SELECT * FROM location LIMIT ?,?`, [offset, 10]);
  const meta = {page};

  return {
    data,
    meta
  }
}

function create(data) {
  try {
    const {company_id,location_name , location_country, location_city} = data;
  
  const result = db.run('INSERT INTO location (company_id,location_name , location_country, location_city) VALUES (@company_id,@location_name , @location_country, @location_city)', {company_id,location_name , location_country, location_city});
  
  let message = 'se ha creado la location';
  if (result.changes) {
    return {
      statuscode: 201,
      message: message
    };
  }
  return {message};
  } catch (error) {

    return {
      statucode: 500,
      message: error.message};
  }
}

module.exports = {
  getMultiple,
  create
}
