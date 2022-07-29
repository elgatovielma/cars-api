const express = require('express');
const route = express.Router()

const controller = require('../controller/controller');

const validateDto = require('../middleware/validate-dto');
const carSchema = require('../schema/car');

// API
route.post('/api/v1/cars', validateDto(carSchema), controller.create);
route.get('/api/v1/cars', controller.list);
route.get('/api/v1/cars/:id', controller.get);
route.patch('/api/v1/cars/:id', validateDto(carSchema), controller.update);
route.delete('/api/v1/cars/:id', controller.delete);



module.exports = route