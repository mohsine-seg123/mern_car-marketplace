const jwt = require('jsonwebtoken');
const User = require('../Models/userModel');
const catchAsync = require('../utils/catchAsync');
<<<<<<< HEAD
const AppError = require('../utils/appError'); 
=======
const AppError = require('../utils/appError');

>>>>>>> 6f3f9fe (after add dashbord)

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};


const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

<<<<<<< HEAD
  const cookieOptions={
       expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN *24*60*60*1000),
       httpOnly:true,
      secure: true,       
      sameSite: "none",
  }
=======
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
    // sameSite: 'none', // obligatoire pour cross-origin (frontend:5173 → backend:3000)
  };
>>>>>>> 6f3f9fe (after add dashbord)

  res.cookie('jwt',token,cookieOptions);

  // remove password from output
   user.password = undefined;
  res.status(statusCode).json({
    status: 'success',
    data: {
      user,
    },
  });
};


exports.signup = catchAsync(async (req, res) => {

    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

   createSendToken(newUser, 201, res);
});



exports.login=catchAsync(async(req,res,next)=>{
    const {email,password}=req.body;

    //1)check if email and password exist
     if(!email || !password){
      return next(new AppError('Please provide email and password',400));
     }

    //2)check if user exist && password is correct

    const user= await User.findOne({email}).select('+password');
    if(!user || !(await user.correctPassword(password,user.password))){
        return next(new AppError('Incorrect email or password', 401));
    }

    // 3) if everything ok send token to client
     createSendToken(user,200,res);
});


<<<<<<< HEAD

=======
>>>>>>> 6f3f9fe (after add dashbord)
exports.protect = catchAsync(async (req, res, next) => {
  const token = req.cookies?.jwt;

  if (!token) return next(new AppError('you are not login', 401));

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
<<<<<<< HEAD

=======
>>>>>>> 6f3f9fe (after add dashbord)
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) return next(new AppError('User not found', 401));

  req.user = currentUser;
  next();
});


exports.me=catchAsync(async(req,res,next)=>{
   const user=req.user;
<<<<<<< HEAD
   console.log(user);
=======
>>>>>>> 6f3f9fe (after add dashbord)
   res.status(200).json({
    status:'success',
    data:{
        user,
    }
   });
});

<<<<<<< HEAD

exports.logout = catchAsync(async (req, res) => {
     res.cookie('jwt','loggedout',{
    expires:new Date(Date.now()+10*1000),
    httpOnly:true,
     sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",
   });
    res.status(200).json({ status: 'success' });
});
=======
exports.logout = catchAsync(async (req, res) => {
    res.cookie('jwt','loggedout',{
    expires:new Date(Date.now()+10*1000),
    httpOnly:true,
   });
    res.status(200).json({ status: 'success' });
});

// exports.logout = (req, res) => {
//   res.clearCookie('jwt', {
//     httpOnly: true,
//     sameSite: 'none', // ou "lax" selon ton setup
//     secure: true, // true en https, false en localhost http
//     path: '/', // IMPORTANT
//   });

//   res.status(200).json({ status: 'success' });
// };


// exports.restrictTo=(role)=>{
//    return ((req,res,next)=>{
//        console.log("hello world",req.user.role);
//        if(req.user.role!==role){
//         return next(new AppError("You are not authorized to perform this action",401));
//        }
//        next();
//    });
// }


exports.restrictTo = (role) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new AppError('You are not logged in', 401));
    }

    console.log('role:', req.user.role);

    if (req.user.role !== role) {
      return next(
        new AppError('You are not authorized to perform this action', 403),
      );
    }

    next();
  };
};
>>>>>>> 6f3f9fe (after add dashbord)
