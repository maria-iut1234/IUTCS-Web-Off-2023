import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({

  token_id: { type: String, required: true},

  token: { type: String, required: true, },

  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Registration', required: true },

  createdAt: { type: Date, default: Date.now, },

  expiresAt: { type: Date,  },

  isActive: { type: Boolean, default: true },

});

export default mongoose.model('Token', tokenSchema);

