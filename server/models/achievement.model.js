import mongoose from 'mongoose';

const achievementSchema = new mongoose.Schema({
  
  title: { type: String, required: true },

  awards: { type: String },

  description: { type: String, required: true },

  date: { type: Date, required: true },

  competition: { type: String, required: true },

  teamMembers: { type: String, required: true },

},
{ collection: 'achievements' }
);

export default mongoose.model('Achievement', achievementSchema);

