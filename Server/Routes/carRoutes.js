const express = require("express");
const router = express.Router(); 
const carController = require("../Controllers/carController").getAllCars;


router.get("/", carController);

module.exports = router;
