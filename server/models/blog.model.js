import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  
  title: { type: String, required: true },
  
  description: { type: String, required: true },

  about: { type: String},

  author: { type: String, required: true, },

  date: { type: Date, default: Date.now, },

  tags: [ { type: String, }, ],
  
});

export default mongoose.model('Blog', blogSchema);

