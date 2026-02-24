const express=require('express');
const authController=require('../Controllers/authController');
const router = express.Router();
const userController = require('../Controllers/userController');



router.post('/login',authController.login);
router.get('/me',authController.protect,authController.me);
router.post('/logout',authController.logout);
router.get('/getAllUsers',userController.getAllusers);
router.delete(
  '/deleteUser/:id',
  authController.protect,
  authController.restrictTo('admin'),
  userController.deleteUser,
);

module.exports=router;

