const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A contact must have a name'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name must be less than 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'A contact must have an email'],
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    message: {
      type: String,
      required: [true, 'A contact must have a message'],
      trim: true,
      minlength: [10, 'Message must be at least 10 characters'],
      maxlength: [1000, 'Message must be less than 1000 characters'],
    },
    number: {
      type: String,
      trim: true,
    },
  },
  {
    collection: 'contacts',
    timestamps: true,
  },
);

// Index pour recherche rapide
contactSchema.index({ email: 1 });
contactSchema.index({ createdAt: -1 });

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
