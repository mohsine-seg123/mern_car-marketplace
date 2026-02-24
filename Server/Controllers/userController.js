const User = require("../Models/userModel");
const catchAsync = require("../utils/catchAsync");


exports.getAllusers=catchAsync(async(req,res,next)=>{
     const allusers=await User.find();
     res.json({
         status:"success",
         data:{
            allusers
         }
     });
})


exports.deleteUser=catchAsync(async(req,res,next)=>{
     const user = await User.findById(req.params.id);

     if(!user){
        return next(new AppError('No user found with that ID',404));
     }
      
     await User.deleteOne({_id:req.params.id});
        res.status(200).json({
            status:"success",          
            data:user.name
        });
});


