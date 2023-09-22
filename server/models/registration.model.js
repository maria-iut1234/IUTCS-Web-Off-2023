import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  
  registration_id: { type: String, required: true},

  name: { type: String, required: true },

  university: { type: String, required: true },

  email: { type: String, required: true  },

  phone: { type: Date,  },

});

export default mongoose.model('Registration', registrationSchema);

