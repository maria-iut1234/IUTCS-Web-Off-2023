import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  
  name: { type: String, required: true },

  university: { type: String, required: true },

  email: { type: String, required: true  },

  phone: { type: Date, required: true },

});

export default mongoose.model('Registration', registrationSchema);

