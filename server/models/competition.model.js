const mongoose = require('mongoose');

const competitionSchema = new mongoose.Schema({
  
  name: { type: String, required: true },

  description: { type: String, required: true },

  prizes: { type: String },

  date: { type: Date, required: true },

});

const Competition = mongoose.model('Competition', competitionSchema);

module.exports = Competition;
