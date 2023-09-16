const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

  username: { type: String, unique: true,  required: true, },

  email: { type: String, unique: true,  required: true, },

  password: { type: String, required: true, },

  role: { type: String, },
  
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
