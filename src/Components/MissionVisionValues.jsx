import React from "react";
import "../Styles/About.css";

function MissionVisionValues() {
  return (
    <div className="mvv-grid">
      <div className="card">
        <div className="icon">🎯</div>
        <h3>Our Mission</h3>
        <p>
          To strengthen young people’s understanding of diverse cultures,
          develop tolerance towards cultural differences, and foster respect
          through immersive festival experiences.
        </p>
      </div>
      <div className="card">
        <div className="icon">🌟</div>
        <h3>Our Vision</h3>
        <p>
          A world where cultural diversity is celebrated and preserved, where
          young people become ambassadors of peace through cultural exchange and
          artistic collaboration.
        </p>
      </div>
      <div className="card">
        <div className="icon">🤝</div>
        <h3>Our Values</h3>
        <ul>
          <li>✔ Cultural Respect</li>
          <li>✔ Inclusivity</li>
          <li>✔ Educational Excellence</li>
          <li>✔ Community Building</li>
        </ul>
      </div>
    </div>
  );
}

export default MissionVisionValues;
