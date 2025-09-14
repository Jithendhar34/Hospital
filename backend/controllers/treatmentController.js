import Treatment from "../models/Treatment.js";

export const getTreatments = async (req, res) => {
  const treatments = await Treatment.find();
  res.json(treatments);
};

export const createTreatment = async (req, res) => {
  try {
    const treatment = new Treatment(req.body);
    await treatment.save();
    res.status(201).json(treatment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
