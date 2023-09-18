import mongoose from 'mongoose';

const competitionSchema = new mongoose.Schema({
  
  name: { type: String, required: true },

  description: { type: String, required: true },

  prizes: { type: String },

  date: { type: Date, required: true },

});

export default mongoose.model('Competition', competitionSchema);

