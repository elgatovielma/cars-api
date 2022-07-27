const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect("mongodb://database:27017");
        console.log("MongoDB connected : mongodb://database:2701");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB