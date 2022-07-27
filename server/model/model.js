const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    ownersEmail: {
        type : String,
        required: true,
        unique: true
    },
    brand : {
        type : String,
        required: true
    },
    model : {
        type: String,
        required: true
    },
    hybrid : {
        type: Boolean,
        required: true
    },
    color :  String,
    year: Number 
});

module.exports = mongoose.model('Cars', schema);