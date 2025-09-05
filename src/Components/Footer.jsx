import React, { useState, useEffect } from "react";
import "../Styles/Footer.css";

const Footer = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return date.toLocaleString("en-US", options);
  };

  const toggleTheme = () => {
    const isLightMode = document.body.classList.contains("light-mode");
    if (isLightMode) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
  };

  // Get the current theme to display the correct text
  const isLightMode = document.body.classList.contains("light-mode");

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <span>⏰ Current Time: {formatDate(currentDateTime)}</span>
        </div>
        <div className="footer-item">
          <span>📍 Location: Sangotedo, Lagos, Nigeria</span>
        </div>
        <div className="footer-item">
          <span>🎉 Next Festival: Eid al-Fitr 2024</span>
        </div>
        <div className="footer-item">
          <span>🤝 Join us in celebrating global cultures!</span>
        </div>
        <div className="footer-item">
          <span onClick={toggleTheme} style={{ cursor: "pointer" }}>
            {isLightMode ? "☀ Light Mode Active" : "🌙 Dark Mode Active"}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
