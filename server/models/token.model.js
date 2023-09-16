const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  token: { type: String, required: true, },

  user: {  },

  createdAt: { type: Date, default: Date.now, },

});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
