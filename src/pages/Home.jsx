import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

// ✅ Import images from src/images
import doctor1 from "../images/doctor1.jpg";
import doctor2 from "../images/doctor2.png";

function Home() {
  const navigate = useNavigate(); // ✅ hook for navigation

  return (
    <section className="hero">
      <div className="hero-left">
        <h1>We help patients to live a healthy, longer life.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
          quaerat cumque fugit, perspiciatis cum nemo aperiam, aut quia earum
          amet architecto, modi odio. Soluta unde ducimus perferendis?
        </p>

        {/* ✅ Button navigates to /appointment */}
        <button
          className="cta-btn"
          onClick={() => navigate("/appointment")}
        >
          Request an Appointment
        </button>

        <div className="stats">
          <div>
            <h2>30+</h2>
            <p>Years of Experience</p>
          </div>
          <div>
            <h2>15+</h2>
            <p>Clinic Location</p>
          </div>
          <div>
            <h2>100%</h2>
            <p>Patient Satisfaction</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="main-doctor">
          {/* ✅ Use imported doctor1 image */}
          <img src={doctor1} alt="Main Doctor" />
        </div>
        <div className="side-doctors">
          {/* ✅ Use imported doctor2 image */}
          {/* <img src={doctor2} alt="Doctor" /> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
