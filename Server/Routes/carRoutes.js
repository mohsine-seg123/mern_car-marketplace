
const express = require('express');
const router = express.Router();
const carController = require('../Controllers/carController');

router.get('/stats', carController.getCarStats);

router.route('/').get(carController.getAllCars).post(carController.createCar);

router
  .route('/:id')
  .get(carController.getCarById)
  .patch(carController.updateCar)

module.exports = router;
