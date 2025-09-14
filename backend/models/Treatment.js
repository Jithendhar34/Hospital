import mongoose from "mongoose";

const treatmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
});

const Treatment = mongoose.model("Treatment", treatmentSchema);
export default Treatment;
