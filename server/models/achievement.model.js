const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  
  title: { type: String, required: true },

  awards: { type: String },

  description: { type: String, required: true },

  date: { type: Date, required: true },

  competition: { type: String, required: true },

  teamMembers: { type: String, required: true },

});

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;
