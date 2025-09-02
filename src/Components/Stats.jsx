import React from "react";

import "../Styles/About.css";
function Stats() {
  const data = [
    { number: "15", label: "Years of Experience" },
    { number: "200", label: "Festivals Organized" },
    { number: "50", label: "Countries Reached" },
    { number: "1,000,000", label: "Lives Touched" },
  ];

  return (
    <div className="stats">
      {data.map((item, index) => (
        <div key={index} className="stat-box">
          <h3>{item.number}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;
