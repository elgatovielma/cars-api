const Cardb = require('../model/model');

// create and save new car
exports.create = async (req,res)=> {

    try {
        // new car
        const car = new Cardb({
            ownersEmail : req.body.ownersEmail,
            brand : req.body.brand,
            model: req.body.model,
            hybrid : req.body.hybrid,
            color: req.body.color,
            year: req.body.year
        });
        let savedCar = await car.save(); //when fail its goes to catch
        console.log(savedCar);
        res.send(savedCar);
      } catch (err) {
        console.log('err' + err);
        res.status(500).send(err);
      }

}
