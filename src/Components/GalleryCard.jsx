import React from "react";

const GalleryCard = ({
  image,
  name,
  country,
  tradition,
  continent,
  onClick,
}) => {
  return (
    <div className="gallery-card" onClick={onClick}>
      <img src={image} alt={name} className="gallery-image" />
      <div className="card-overlay">
        <h3 className="card-title">{name}</h3>
        <p className="card-details">
          {country} • {tradition}
        </p>
        <p className="card-continent">{continent}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
