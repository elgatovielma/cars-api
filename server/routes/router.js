const express = require('express');
const route = express.Router()

const cars = require('../controllers/cars');
const auth = require('../controllers/cars');

const validateDto = require('../middleware/validate-dto');
const carSchema = require('../schemas/car');

// Cars API endpoints
route.post('/api/v1/cars', validateDto(carSchema), cars.create);
route.get('/api/v1/cars', cars.list);
route.get('/api/v1/cars/:id', cars.get);
route.patch('/api/v1/cars/:id', validateDto(carSchema), cars.update);
route.delete('/api/v1/cars/:id', cars.delete);

// JWT Authentication endpoints
route.post('/login', auth.login);



module.exports = route