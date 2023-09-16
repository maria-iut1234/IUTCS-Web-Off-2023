const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({

  title: { type: String, required: true },
  
  description: { type: String, required: true },
  
  about: { type: String},
  
  date: { type: Date, default: Date.now, },
  
  tags: [ { type: String, }, ],

});

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;
