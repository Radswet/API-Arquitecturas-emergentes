import fs from 'fs-extra'
export const getAllLocation = async (req, res) =>{
  try {
    
    res.send({
      status: 201, 
      message: locations
    });
  } catch (error) {
    res.send({
      status: 500, 
      message: error.message
    });
  }
}

export const getLocation = async (req, res) => {
  try {
    
    //return status 201
  } catch (error) {
    res.send({
      status: 500, 
      message: error.message
    });
  }
}

export const updateLocation = async (req, res) =>{
  try {
    
    //return status 201
  } catch (error) {
    res.send({
      status: 500, 
      message: error.message
    });
  }
}

export const deleteLocation = async (req, res) =>{
  try {
    
    //return status 201
  } catch (error) {
    res.send({
      status: 500, 
      message: error.message
    });
  }
}
