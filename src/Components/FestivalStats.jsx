import React from "react";
import "../Styles/Festivals.css";

const FestivalStats = () => {
  return (
    <div className="stats-container">
      <div className="stat-card">
        <h3>32</h3>
        <p>Featured Festivals</p>
      </div>
      <div className="stat-card">
        <h3>20+</h3>
        <p>Countries</p>
      </div>
      <div className="stat-card">
        <h3>158</h3>
        <p>Traditions</p>
      </div>
      <div className="stat-card">
        <h3>6B+</h3>
        <p>Global Participants</p>
      </div>
    </div>
  );
};

export default FestivalStats;
