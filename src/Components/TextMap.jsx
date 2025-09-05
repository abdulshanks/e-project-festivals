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
            <li>Festivals by Religion</li>
            <li>Festivals by Location</li>
            <li>Festivals by Month</li>
            <li>Festival Details Guide</li>
            <li>Site Map Guide</li>
          </ul>
        </div>

        {/* Right Column: Key Features */}
        <div className="column">
          <h3>⚙️ Key Features</h3>
          <ul>
            <li>Date visual Tool</li>
            <li>Download Festival Timing</li>
            <li>Download Festival Location</li>
            <li>Download Festival Description</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TextMap;
