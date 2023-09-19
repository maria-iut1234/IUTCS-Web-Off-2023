import mongoose from 'mongoose';

const leaderboardSchema = new mongoose.Schema({

  participantName: { type: String, required: true, },

  university: { type: String, required: true, },

  contest: { type: String, required: true, },

  rank: { type: Number, required: true, },

  date: { type: Date, default: Date.now, },
  
});

export default mongoose.model('Leaderboard', leaderboardSchema);

