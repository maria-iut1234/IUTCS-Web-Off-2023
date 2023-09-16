const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({

  participantName: { type: String, required: true, },

  university: { type: String, required: true, },

  contest: { type: String, required: true, },

  rank: { type: Number, required: true, },

  date: { type: Date, default: Date.now, },
  
});

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

module.exports = Leaderboard;
