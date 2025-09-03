import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
// You can keep the image import if you are using a local asset.
// import EidBackground from "../Images/eid1.jpeg";

const Navbar = () => {
  const [visitors, setVisitors] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (
      process.env.NODE_ENV === "development" &&
      !localStorage.getItem("isCounted")
    ) {
      localStorage.setItem("isCounted", "true");
      return;
    }

    let currentVisitors = parseInt(localStorage.getItem("visitors") || "0", 10);
    currentVisitors += 1;
    setVisitors(currentVisitors);
    localStorage.setItem("visitors", currentVisitors);

    return () => {
      if (process.env.NODE_ENV === "development") {
        localStorage.removeItem("isCounted");
      }
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="top-bar">
          <div className="logo">
            <h1>MOONLIGHT EVENTS</h1>
            <p>Celebrating Global Festivals</p>
          </div>
          <div className="visitor-details">
            <div className="toggle-mode" onClick={toggleTheme}>
              <i className={`fas ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
            </div>
            <div className="visitor-count">
              Visitors
              <span>{visitors.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div className="page-details">
          <h1>Discover World Festivals</h1>
          <p>Strengthening cultural understanding through celebration</p>
        </div>
      </header>

      {/* The main navigation bar, now part of the normal page flow */}
      <nav className={`main-nav ${isDarkMode ? "dark-mode" : ""}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Festivals</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/sitemap">Sitemap</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
