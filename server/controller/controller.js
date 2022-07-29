const Car = require('../model/model');

// Create and save a new car
exports.create = async (req,res)=> {
  try {
    // new car
    const car = new Car({
      licencePlate : req.body.licencePlate,
      brand : req.body.brand,
      model: req.body.model,
      hybrid : req.body.hybrid,
      year: req.body.year, 
      images: req.body.images
    });
    let savedCar = await car.save(); //save new car document
    res.send({ _id: savedCar._id});
  } catch(err) {
    console.log(`err ${err}`);
    // 11000 is the error code MongoDB  returns when an unique attribute value has already been saved 
    if(err.code == 11000) res.status(400).send({ message :`The car with the licence plate ${req.body.licencePlate} already exists`});
    // Check if there was a missing required attribute 
    else if (err.name === "ValidationError")  res.status(400).send({ message : err.message});
    res.status(500).send({ message :`Something went wrong`});
  }

}

// List all cars 
exports.list = async (_,res)=> {
  try {
    // list cars documents and return only meta-data
    let carsList = await Car.find({}, '_id createdAt updatedAt');    
    res.send(carsList); 
  } catch(err) {
    console.log(`err ${err}`);
    res.status(500).send({ message :`Something went wrong`});
  }
}

// Get single car 
exports.get = async (req, res)=> {
  try {
    // Get only one car document with the full data 
    const carId = req.params.id;
    let car = await Car.findById(carId);
    if(!car) res.status(404).send({ message : `The car with the id ${carId} was not found`});
    res.send(car);   
  } catch(err) {
    console.log(`err ${err}`);
    res.status(500).send({ message :`Something went wrong`});
  }
}

// Update a single car proporty/properties
exports.update = async (req, res)=> {
  try {
    // update some car´s properties  but not the whole document
    const carId =  req.params.id;
    const filter = {_id: carId};
    const update = req.body;
    let car = await Car.findOneAndUpdate(filter, update, {
      returnOriginal: false
    });
    if(!car) res.status(404).send({ message : `The car with the id ${carId} was not found`});
    res.send(car);   
  } catch(err) {
    console.log(`err ${err}`);
    res.status(500).send({ message :`Something went wrong`});
  }
}

// Delete a car 
exports.delete = async (req, res)=> {
  try {
    // Delete only one car document 
    const carId = req.params.id;
    let car = await Car.findByIdAndDelete(carId);
    if(!car) res.status(404).send({ message : `The car with the id ${carId} was not found`});
    res.send(car);   
  } catch(err) {
    console.log(`err ${err}`);
    res.status(500).send({ message :`Something went wrong`});
  }
}
