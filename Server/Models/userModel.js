const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A user must have a name'],
    },
    email: {
      type: String,
      required: [true, 'A must have a email'],
      unique: true,
      lowercase: true,
      trim:true,
      validate: [validator.isEmail, 'Please provide your email'],
    },
    password: {
      type: String,
      required: [true, 'A must have a password'],
      minlength: [8, 'Password must be at least 8 characters'],
      trim:true,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'A must have a passwordConfirm'],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: 'password are not the same',
      },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  { collection: 'users' },
);

userSchema.pre('save', async function () {
  if (!this.isModified('password')) {
    return ;
  }
  this.password = await bcrypt.hash(this.password, 10);
  this.passwordConfirm = undefined;
});


userSchema.pre('save',async function () {
  if (!this.isModified('password') || this.isNew) return ;
  this.passwordChangedAt = Date.now() - 1000;
});

userSchema.methods.correctPassword =async function(candidatePassword,userPassword){
  return await bcrypt.compare(candidatePassword,userPassword);
}


const User = mongoose.model('User', userSchema);
module.exports = User;
