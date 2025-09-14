import React, { useState } from "react";import "./FindDoctor.css";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Anil Kumar",
    specialty: "Cardiologist",
    timings: "Mon-Fri: 10:00 AM - 5:00 PM",
    img: "https://random.me/api/portraits/men/11.jpg",
  },
  {
    id: 2,
    name: "Dr. Priya Reddy",
    specialty: "Dermatologist",
    timings: "Tue-Sat: 11:00 AM - 6:00 PM",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 3,
    name: "Dr. Suresh Babu",
    specialty: "Neurologist",
    timings: "Mon, Wed, Fri: 9:00 AM - 3:00 PM",
    img: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 4,
    name: "Dr. Shweta Sharma",
    specialty: "Pediatrician",
    timings: "Mon-Sat: 10:00 AM - 4:00 PM",
    img: "https://randomuser.me/api/portraits/women/14.jpg",
  },
];

function FindDoctor() {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctorsData.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="find-doctor-page">
      <h2>Find a Doctor</h2>
      <p>Search and connect with our experienced doctors.</p>

      <input
        type="text"
        placeholder="Search by name or specialty"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="doctor-list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <img
                src={doctor.img}
                alt={doctor.name}
                className="doctor-img"
              />
              <h3>{doctor.name}</h3>
              <p className="specialty">{doctor.specialty}</p>
              <p className="timings">{doctor.timings}</p>
              <button className="book-btn">Book Appointment</button>
            </div>
          ))
        ) : (
          <p>No doctors found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default FindDoctor;
