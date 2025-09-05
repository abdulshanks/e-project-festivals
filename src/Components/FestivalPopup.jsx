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
  }, []);

  const handleDownload = () => {
    // Construct the content for the Word document using HTML
    const content = `
      <html>
        <head>
          <meta charset="UTF-8">
          <title>${festival.name} Details</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
            h1 { color: #333; }
            h2 { color: #555; margin-top: 25px; }
            p { margin: 5px 0; }
            ul { padding-left: 20px; }
            li { margin-bottom: 5px; }
          </style>
        </head>
        <body>
          <h1>${festival.name}</h1>

          <h2>Festival Details</h2>
          <p><strong>Celebrated by:</strong> ${
            festival.details.celebrated_by
          }</p>
          <p><strong>Location:</strong> ${festival.details.location}</p>
          <p><strong>Date:</strong> ${festival.details.date}</p>
          <p><strong>Duration:</strong> ${festival.details.duration}</p>
          <p><strong>Participants:</strong> ${festival.details.participants}</p>

          <h2>Full Description</h2>
          <p>${festival.description.full_description}</p>

          <h2>Historic Importance</h2>
          <p>${festival.description.historic_importance}</p>

          <h2>Traditions & Practices</h2>
          <ul>
            ${festival.traditions_and_practices
              .map((item) => `<li>${item}</li>`)
              .join("")}
          </ul>
        </body>
      </html>
    `;

    // Create a Blob from the HTML content
    const blob = new Blob([content], {
      type: "application/msword;charset=utf-8",
    });

    // Create a download link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${festival.name}-details.doc`;

    // Append the link to the body and click it programmatically
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-content"
        onClick={(e) => e.stopPropagation()}
        id="festival-popup-content"
      >
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
