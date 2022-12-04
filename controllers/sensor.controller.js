const db = require('../services/db');

function getSensor (req){
  try {
    
    //return status 201
  } catch (error) {
    return({
      status: 500, 
      message: error.message
    });
  }
}

function getAllSensor (req){
  try {
    
    //return status 201
  } catch (error) {
    return({
      status: 500, 
      message: error.message
    });
  }
}

function updateSensor (req){
  try {
    
    //return status 201
  } catch (error) {
    return({
      status: 500, 
      message: error.message
    });
  }
}

function deleteSensor (req) {
  try {

    //return status 201
  } catch (error) {
    return({
      status: 500, 
      message: error.message
    });
  }
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