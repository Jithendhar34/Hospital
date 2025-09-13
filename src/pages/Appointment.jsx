import React, { useState } from "react";
import "./Appointment.css";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    bloodGroup: "",
    treatment: "",
    doctor: "",
    timings: "",
    date: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="appointment-page">
      <h2>Book an Appointment</h2>
      <p>Fill out the form below to schedule your appointment.</p>

      {submitted && (
        <div className="success-msg">
          Appointment booked successfully for {formData.name}!
        </div>
      )}

      <form onSubmit={handleSubmit} className="appointment-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Blood Group:
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            placeholder="e.g., A+, O-"
          />
        </label>

        <label>
          Treatment:
          <input
            type="text"
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Doctor:
          <input
            type="text"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Timings:
          <input
            type="text"
            name="timings"
            value={formData.timings}
            onChange={handleChange}
            placeholder="e.g., 10:00 AM - 11:00 AM"
          />
        </label>

        <label>
          Appointment Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default Appointment;
