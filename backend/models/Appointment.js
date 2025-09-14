import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: Number,
    phone: String,
    bloodGroup: String,
    treatment: String,
    doctor: String,
    timings: String,
    date: String,
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
