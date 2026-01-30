const Car = require('../Models/carModel');
const catchAsync=require('../utils/catchAsync');

exports.getAllCars =catchAsync(async (req ,res)=>{
         const cars=await Car.find();
         res.status(200).json({
           status: "success",
           requestedAt: req.requestTime,
           results: cars.length,
           data: {
             cars,
           },
         });
});




