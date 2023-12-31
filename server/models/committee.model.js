import mongoose from 'mongoose';

const committeeSchema = new mongoose.Schema({
    
    commitee_id: { type: String, required: true},

    name: { type: String, required: true },
      
    position: { type: String, required: true, },
      
    photoUrl: { type: String }

});

export default mongoose.model('Committee', committeeSchema);

