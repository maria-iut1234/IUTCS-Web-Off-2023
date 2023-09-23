import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    registration_id: { type: String},

    name: { type: String},

    university: { type: String},

    email: { type: String},

    phone: { type: Date },
  },
  {
    strict: false,
  }
);

export default mongoose.model("Registration", registrationSchema);
