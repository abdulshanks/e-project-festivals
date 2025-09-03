import React from "react";
import "./../Styles/SiteMap.css";

function TextMap() {
  return (
    <div className="text-map-columns">
      <h2>🗺️ Interactive Text Map</h2>
      <div className="text-map-grid">
        {/* Left Column: Key Main Sections */}
        <div className="column">
          <h3>📌 Key Main Sections</h3>
          <ul>
            <li>Festivals by Country & Religion</li>
            <li>Festivals by Religion</li>
            <li>Festivals by Country</li>
            <li>Festivals by Month</li>
            <li>Festival Details Guide</li>
            <li>Site Map Guide</li>
          </ul>
        </div>

        {/* Right Column: Key Features */}
        <div className="column">
          <h3>⚙️ Key Features</h3>
          <ul>
            <li>Date Estimation Tool</li>
            <li>Download Calendar</li>
            <li>Download Festival Timing</li>
            <li>Download Festival Location</li>
            <li>Download Festival Description</li>
            <li>Dark Mode Toggle</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TextMap;
