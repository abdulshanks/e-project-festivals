import React from "react";
import "../Styles/About.css";
import { FaGlobe } from "react-icons/fa"; // 🌍 globe icon

function OurStory() {
  return (
    <section className="our-story">
      <div className="our-story-header">
        <FaGlobe className="icon" />
        <h2>Our Story</h2>
      </div>
      <p>
        <span className="first-letter">F</span>ounded in 2009, MOONLIGHT EVENTS
        began as a small initiative by a group of cultural enthusiasts who
        believed in the power of festivals to unite communities and bridge
        cultural divides. What started as local celebrations in collaboration
        with municipalities has grown into a global movement.
      </p>

      <p>
        <span className="first-letter">O</span>ver the years, we have organized
        festivals across six continents, working hand-in-hand with local city
        associations, cultural organizations, and educational institutions. Our
        festivals serve as platforms for academic, professional, and cultural
        exchange, creating lasting bonds between communities worldwide.
      </p>

      <p>
        <span className="first-letter">T</span>oday, MOONLIGHT EVENTS stands as
        a testament to the belief that cultural understanding is the foundation
        of global peace. Through our festivals, we continue to discover and
        nurture talents, support creative endeavors, and spread information
        about the rich tapestry of human culture.
      </p>
    </section>
  );
}

export default OurStory;
