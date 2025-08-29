import React from "react";
import "../Styles/Festivals.css";

const UpcomingFestival = ({ festivals }) => {
  return (
    <div className="upcoming-festivals-card">
      <div className="upcoming-festivals-header">
        <h4>Upcoming Festivals 2024</h4>
      </div>
      <div className="upcoming-festivals-list">
        {festivals.map((festival) => (
          <div key={festival.id} className="upcoming-festival-item">
            <div className="festival-info">
              <img
                src={festival.image_url}
                alt={festival.name}
                className="festival-icon"
              />
              <div className="festival-details">
                <p className="festival-name">{festival.name}</p>
                <p className="festival-date-location">
                  {festival.details.date} • {festival.details.location}
                </p>
              </div>
            </div>
            <span className="festival-price">Free</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingFestival;
