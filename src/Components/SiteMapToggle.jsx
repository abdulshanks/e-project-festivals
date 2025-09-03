import React, { useState } from "react";
import VisualMap from "./VisualMap";
import TextMap from "./TextMap";
import "./../Styles/SiteMap.css";

function SiteMap() {
  const [view, setView] = useState("visual");

  return (
    <main className="site-map-wrapper">
      {/* <header className="header">
        <h1>Site Map</h1>
        <p>Navigate through our website structure and discover all available features.</p>
      </header> */}

      <nav className="toggle-container" aria-label="Map view toggle">
        <button
          className={view === "visual" ? "active" : ""}
          onClick={() => setView("visual")}
          aria-pressed={view === "visual"}
        >
          Visual Map
        </button>
        <button
          className={view === "text" ? "active" : ""}
          onClick={() => setView("text")}
          aria-pressed={view === "text"}
        >
          Text Map
        </button>
      </nav>

      <section className="map-content">
        {view === "visual" ? <VisualMap /> : <TextMap />}
      </section>
    </main>
  );
}

export default SiteMap;
