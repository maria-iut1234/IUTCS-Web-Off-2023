import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({

  username: { type: String, unique: true,  required: true, },

  email: { type: String, unique: true,  required: true, },

  password: { type: String, required: true, },

  image: { type: String, },

  role: { type: String, },
  
});

export default mongoose.model('Admin', adminSchema);

