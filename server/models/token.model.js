import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({

  token_id: { type: String, required: true},

  token: { type: String, required: true, },

  user: {  },

  createdAt: { type: Date, default: Date.now, },

});

export default mongoose.model('Token', tokenSchema);

