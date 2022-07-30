const express = require('express');
const route = express.Router()

const cars = require('../controllers/cars');
const auth = require('../controllers/auth');

const validateDto = require('../middleware/validate-dto');
const authenticateToken =  require('../middleware/auth');
const carsValidator = require('../validators/carsValidator');
const usersValidator = require('../validators/usersValidator');

// Cars API endpoints
route.post('/api/v1/cars', [authenticateToken, validateDto(carsValidator)], cars.create);
route.get('/api/v1/cars', authenticateToken, cars.list);
route.get('/api/v1/cars/:id', authenticateToken,cars.get);
route.patch('/api/v1/cars/:id', [authenticateToken, validateDto(carsValidator)], cars.update);
route.delete('/api/v1/cars/:id', authenticateToken, cars.delete);

// JWT Authentication endpoints
route.post('/auth/login', validateDto(usersValidator), auth.login);
route.post('/auth/token', validateDto(usersValidator), auth.token);
route.delete('/auth/logout', validateDto(usersValidator), auth.logout);



module.exports = route