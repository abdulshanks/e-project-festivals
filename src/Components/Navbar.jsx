import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import ChristmasBackground from "../christmas1.png";

const Navbar = () => {
  const [visitors, setVisitors] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark-mode");

  useEffect(() => {
    let currentVisitors = parseInt(
      localStorage.getItem("visitors") || "26",
      10
    );
    currentVisitors += 1;
    setVisitors(currentVisitors);
    localStorage.setItem("visitors", currentVisitors);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // This effect ensures the body class is always in sync with the theme state
    document.body.classList.remove("dark-mode", "light-mode");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "dark-mode" ? "light-mode" : "dark-mode"
    );
  };

  return (
    <>
      <header className="header">
        <div className="top-bar">
          <div className="logo">
            <h1>MOONLIGHT EVENTS</h1>
            <p>Celebrating Global Festivals</p>
          </div>
          <div className="visitor-and-hamburger">
            <div className="visitor-count-container">
              <p>Visitors</p>
              <span>{visitors.toLocaleString()}</span>
            </div>
            <button
              id="theme-toggle"
              aria-label="Toggle light and dark mode"
              onClick={toggleTheme}
            >
              {theme === "dark-mode" ? "🌙" : "☀️"}
            </button>
            <div className="hamburger-menu" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
        <div
          className="hero-section"
          style={{ backgroundImage: `url(${ChristmasBackground})` }}
        >
          <div className="hero-content">
            <h1>Discover World Festivals</h1>
            <p>Strengthening cultural understanding through celebration</p>
          </div>
        </div>
      </header>
      <nav className="main-nav">
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Festivals
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={closeMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/faq" onClick={closeMenu}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/sitemap" onClick={closeMenu}>
              Sitemap
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
