const express = require('express');
const route = express.Router()

const controller = require('../controller/controller');

const validateDto = require('../middleware/validate-dto');
const carSchema = require('../schema/car');

// API
route.post('/api/cars', validateDto(carSchema), controller.create);

//route.get('/api/cars/id', controller.find);



module.exports = route