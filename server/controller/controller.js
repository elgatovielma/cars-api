const Car = require('../model/model');

// Create and save a new car
exports.create = async (req,res)=> {
  try {
    // new car
    const car = new Car({
      ownersEmail : req.body.ownersEmail,
      brand : req.body.brand,
      model: req.body.model,
      hybrid : req.body.hybrid,
      color: req.body.color,
      year: req.body.year
    });
    let savedCar = await car.save(); //save new car document
    res.send(savedCar);
  } catch(err) {
    console.log(`err ${err}`);
    res.status(500).send(err);
  }

}

// List all cars 
exports.list = async (_,res)=> {
  try {
    // list cars documents and return only meta-data
    let carsList = await Car.find({}, '_id __v');    
    res.send(carsList); 
  } catch(err) {
    console.log(`err ${err}`);
    res.status(500).send(err);
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
    res.status(500).send(err);
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
    res.status(500).send(err);
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
    res.status(500).send(err);
  }
}
