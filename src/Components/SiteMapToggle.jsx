import React, { useState } from "react";
import VisualMap from "./VisualMap";
import TextMap from "./TextMap";
import "./../Styles/Sitemap.css";

function SiteMapToggle() {
  const [view, setView] = useState("visual");

  return (
    <div className="toggle-view-container">
      <nav className="toggle-options" aria-label="Map view toggle">
        <button
          className={
            view === "visual"
              ? "toggle-button toggle-button--active"
              : "toggle-button"
          }
          onClick={() => setView("visual")}
          aria-pressed={view === "visual"}
        >
          Visual Map
        </button>
        <button
          className={
            view === "text"
              ? "toggle-button toggle-button--active"
              : "toggle-button"
          }
          onClick={() => setView("text")}
          aria-pressed={view === "text"}
        >
          Text Map
        </button>
      </nav>

      <section className="map-content">
        {view === "visual" ? <VisualMap /> : <TextMap />}
      </section>
    </div>
  );
}

export default SiteMapToggle;
