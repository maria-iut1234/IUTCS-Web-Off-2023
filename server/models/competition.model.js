import mongoose from 'mongoose';

const competitionSchema = new mongoose.Schema({
  
  competition_id: { type: String, required: true},

  name: { type: String, required: true },

  description: { type: String, required: true },

  prizes: { type: String },

  date: { type: Date, required: true },

});

export default mongoose.model('Competition', competitionSchema);

