const mongoose = require('mongoose');

// Build Schema for cars model
const schema = new mongoose.Schema(
    {
        licencePlate: {
            type : String,
            required: true,
            unique: true
        },
        brand: {
            type : String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        hybrid: {
            type: Boolean,
            required: true
        },
        year:  {
            type: Number,
            required: true
        },
        images: [{
            _id: false,
            path: {
                type: String,
                required: true
            }, 
            mimeType: {
                type: String,
                required: true
            },
        }],
    },
    { timestamps: true },
);

module.exports = mongoose.model('cars', schema);