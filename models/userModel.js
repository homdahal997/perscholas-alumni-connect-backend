const { Schema, model } = require('../config/db-connection.js');

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true }); // Use timestamps to automatically add `createdAt` and `updatedAt` fields

module.exports = model('User', userSchema, 'users'); // Explicitly defining the collection name