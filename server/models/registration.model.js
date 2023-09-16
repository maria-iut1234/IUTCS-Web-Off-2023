const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  
  name: { type: String, required: true },

  university: { type: String, required: true },

  email: { type: String, required: true  },

  phone: { type: Date, required: true },

});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
