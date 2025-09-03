import React from "react";
import "./../styles/Contact.css";

function Card({ title, lines }) {
  return (
    <div className="contact-card">
      <h2>{title}</h2>
      <ul>
        {lines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
