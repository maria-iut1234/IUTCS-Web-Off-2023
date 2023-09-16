const mongoose = require('mongoose');

const committeeSchema = new mongoose.Schema({
    
    name: { type: String, required: true },
      
    position: { type: String, required: true, },
      
    photoUrl: { type: String }

});

const Committee = mongoose.model('Committee', committeeSchema);

module.exports = Committee;
