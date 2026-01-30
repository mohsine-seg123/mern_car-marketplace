const latest = require('../Models/LatestModel');
const catchAsync=require('../utils/catchAsync');

exports.getAllLatests =catchAsync(async (req ,res)=>{
         const latests=await latest.find();
         res.status(200).json({
           status: "success",
           requestedAt: req.requestTime,
           results: latests.length,
           data: {
             latests,
           },
         });
});