import React, { useEffect } from "react";
import "../Styles/Festivals.css";

const FestivalPopup = ({ festival, onClose }) => {
  useEffect(() => {
    // Add the class to the body when the popup component mounts
    document.body.classList.add("no-scroll");

    // The returned function is the "cleanup" function
    return () => {
      // This will remove the class when the popup component unmounts
      document.body.classList.remove("no-scroll");
    };
  }, []); // The empty array ensures this effect runs only once

  const handleDownload = () => {
    const data = JSON.stringify(festival, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${festival.name}-details.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{festival.name}</h2>

        <div className="popup-image">
          <img src={festival.image_url} alt={festival.name} />
        </div>

        <div className="popup-details">
          <p>
            <strong>Celebrated by:</strong> {festival.details.celebrated_by}
          </p>
          <p>
            <strong>Duration:</strong> {festival.details.duration}
          </p>
          <p>
            <strong>Participants:</strong> {festival.details.participants}
          </p>

          <div className="section">
            <h3>Historic Importance</h3>
            <p>{festival.description.historic_importance}</p>
          </div>

          <div className="section">
            <h3>Traditions & Practices</h3>
            <ul>
              {festival.traditions_and_practices.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <button onClick={handleDownload} className="download-btn">
          Download Detailed Info
        </button>

        <div className="popup-image-down">
          <img src={festival.gallery_images[0]} alt={festival.name} />
          <img src={festival.gallery_images[1]} alt={festival.name} />
          <img src={festival.gallery_images[2]} alt={festival.name} />
          <img src={festival.gallery_images[3]} alt={festival.name} />
        </div>
      </div>
    </div>
  );
};

export default FestivalPopup;
