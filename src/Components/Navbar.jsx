import React from "react";
import "../Styles/About.css";

function Navbar() {
  return (
    <div>
      <header className="header">
        <h1>Discover World Festivals</h1>
        <p>Strengthening cultural understanding through celebration</p>
      </header>
      <nav className="navbar">
        <ul>
          <li>Festivals</li>
          <li>Gallery</li>
          <li>About</li>
          <li>Contact</li>
          <li>FAQ</li>
          <li>Sitemap</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
