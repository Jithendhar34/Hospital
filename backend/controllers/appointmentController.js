import Appointment from "../models/Appointment.js";

export const getAppointments = async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
};

export const createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: "Appointment booked successfully", appointment });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
