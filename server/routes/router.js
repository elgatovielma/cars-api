const express = require('express');
const route = express.Router()

const cars = require('../controllers/cars');
const auth = require('../controllers/auth');

const validateDto = require('../middleware/validate-dto');
const authenticateToken =  require('../middleware/auth');
const validator = require('../validations/validation');

// Cars API endpoints
route.post('/api/v1/cars', [authenticateToken, validateDto(validator)], cars.create);
route.get('/api/v1/cars', authenticateToken, cars.list);
route.get('/api/v1/cars/:id', authenticateToken, authenticateToken,cars.get);
route.patch('/api/v1/cars/:id', [authenticateToken, validateDto(validator)], cars.update);
route.delete('/api/v1/cars/:id', authenticateToken, cars.delete);

// JWT Authentication endpoints
route.post('/login', validateDto(validator), auth.login);
route.post('/token', validateDto(validator), auth.token);
route.delete('/logout', validateDto(validator), auth.logout);



module.exports = route