import React from "react";
import "./Treatment.css"; // create this file for styling

function Treatment() {
  return (
    <div className="treatment-page">
      {/* Hero Section */}
      <section className="treatment-hero">
        <h1>Our Comprehensive Treatments & Services</h1>
        <p>
          Trusted and your healthcare is valued with the expertise and
          experience at CureHere Hospital.
        </p>
      </section>

      {/* Specialized Care Section */}
      <section className="specialized-care">
        <h2>Specialized Care for Every Need</h2>
        <div className="care-cards">
          <div className="care-card">
            <h3>Personalized Consultation</h3>
            <p>
              The latest MRI scanner for diagnosis with the highest level of
              precision.
            </p>
          </div>
          <div className="care-card">
            <h3>Cardiology Diagnosis</h3>
            <p>
              Advanced technology for accurate heart diagnosis and treatment.
            </p>
          </div>
          <div className="care-card">
            <h3>Oncology Onagriogy</h3>
            <p>
              Comprehensive cancer care with cutting-edge treatments.
            </p>
          </div>
          <div className="care-card">
            <h3>Digital X-Ray System</h3>
            <p>
              Next-generation imaging system for faster and more accurate
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section className="advanced-tech">
        <h2>Our Approach: Advanced Technology, Human Touch</h2>
        <div className="tech-cards">
          <div className="tech-card">
            <img src="src\images\robotic.jpg" alt="Robotic Surgery" />
            <h3>Robotic-Assisted Surgical System</h3>
            <p>
              Our expert doctors ensure the highest safety standards with
              robotic precision.
            </p>
            <button className="cta-btn">Book an Appointment</button>
          </div>
          <div className="tech-card">
            <img src="src\images\Mri.jpg" alt="MRI" />
            <h3>State-of-the-Art Treatment Modalities</h3>
            <p>
              Latest MRI and imaging systems to provide detailed diagnostics and
              personalized care.
            </p>
          </div>
          <div className="tech-card">
            <img src="https://via.placeholder.com/350x200" alt="Recovery Support" />
            <h3>Recovery & Rehabilitation Support</h3>
            <p>
              Dedicated surgical rooms and rehabilitation centers for a complete
              healing journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Treatment;
