const express = require('express');
const contactController = require('../Controllers/contactController');
const authController = require('../Controllers/authController');
const router = express.Router();


router.post('/contact', contactController.createContact);
router.get('/getAllMessage',  contactController.getAllContacts);
router.delete('/deleteContact/:id', authController.restrictTo('admin'), contactController.deleteContact);

module.exports = router;
