import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  
  title: { type: String, required: true },
  
  description: { type: String, required: true },

  about: { type: String},

  date: { type: Date, default: Date.now, },

  tags: [ { type: String, }, ],

  location: { type: String, },

});

export default mongoose.model('Activity', activitySchema);
