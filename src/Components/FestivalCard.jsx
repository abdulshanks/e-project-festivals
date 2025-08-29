import React from "react";
import "../Styles/Festivals.css";

const FestivalCard = ({ festival, onClick }) => {
  return (
    <div className="festival-card" onClick={onClick}>
      <img src={festival.image_url} alt={festival.name} />
      <div className="nameLocation">
        <h6>{festival.name}</h6>
        <h6>{festival.details.location}</h6>
      </div>
      <div className="nameLocation">
        <h6>{festival.details.date}</h6>
        <h6>{festival.details.participants}</h6>
      </div>
      <p>{festival.short_description}</p>
      <div className="dp">
        <h6>{festival.id}</h6>
        <h6>{festival.details.duration}</h6>
      </div>
    </div>
  );
};

export default FestivalCard;
