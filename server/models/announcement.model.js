import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({

  announcement_id: { type: String, required: true},

  title: { type: String, required: true },
  
  description: { type: String, required: true },
  
  about: { type: String},
  
  date: { type: Date, default: Date.now, },
  
  tags: [ { type: String, }, ],

});

export default mongoose.model('Announcement', announcementSchema);

