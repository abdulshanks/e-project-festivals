import React from "react";
import { FaGlobe } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Stats from "../Components/Stats";
import MissionVisionValues from "../Components/MissionVisionValues";
import OurStory from "../Components/OurStory";
import SectionHeader from "../Components/SectionHeader";

import "../Styles/About.css";

const buttons = [
  { label: "Partner With Us", onClick: () => alert("Partner clicked!") },
  {
    label: "Explore Our Festivals",
    onClick: () => alert("Explore clicked!"),
  },
];

const leaders = [
  {
    initials: "AM",
    bgColor: "#3b82f6", // blue
    name: "Dr. Aria Moonlight",
    role: "Founder & CEO",
    description:
      "Cultural anthropologist with 20+ years in international festival management",
  },
  {
    initials: "RC",
    bgColor: "#22c55e", // green
    name: "Dr. Raj Cultura",
    role: "Director of Cultural Affairs",
    description: "Expert in cross-cultural communication and festival curation",
  },
  {
    initials: "MH",
    bgColor: "#f97316", // orange
    name: "Maria Harmony",
    role: "Head of Operations",
    description:
      "International project manager specializing in large-scale cultural events",
  },
];

const awards = [
  "UNESCO Cultural Diversity Award (2022)",
  "International Festival Excellence Award (2021)",
  "Global Peace Through Culture Recognition (2020)",
  "Community Impact Excellence Award (2019)",
];

const partners = [
  "United Nations Educational, Scientific and Cultural Organization",
  "World Tourism Organization",
  "International Association of Festivals",
  "Global Cultural Exchange Network",
];

function App() {
  const services = [
    {
      icon: "🎉",
      title: "Festival Organization",
      description:
        "Plan and execute large-scale cultural festivals in collaboration with local authorities.",
    },
    {
      icon: "🤝",
      title: "Cultural Exchange Programs",
      description:
        "Facilitate meaningful interactions between diverse cultural groups.",
    },
    {
      icon: "🌟",
      title: "Talent Discovery",
      description:
        "Identify and support emerging artists and cultural performers.",
    },
    {
      icon: "📚",
      title: "Educational Workshops",
      description:
        "Conduct learning sessions on cultural appreciation and diversity.",
    },
    {
      icon: "🏘️",
      title: "Community Partnerships",
      description:
        "Build lasting relationships with municipalities and cultural organizations.",
    },
    {
      icon: "📖",
      title: "Cultural Documentation",
      description:
        "Preserve and share cultural traditions for future generations.",
    },
  ];
  return (
    <div className="app">
      {/* <Navbar /> */}

      <section className="about">
        <h2>About MOONLIGHT EVENTS</h2>
        <p>
          Bridging cultures, celebrating diversity, and fostering global
          understanding through the universal language of festivals.
        </p>
        <Stats />
        <MissionVisionValues />
      </section>

      <section className="our-story">
        <div className="our-story-header">
          <FaGlobe className="icon" />
          <h2>Our Story</h2>
        </div>
        <p>
          <span className="first-letter">F</span>ounded in 2009, MOONLIGHT
          EVENTS began as a small initiative by a group of cultural enthusiasts
          who believed in the power of festivals to unite communities and bridge
          cultural divides. What started as local celebrations in collaboration
          with municipalities has grown into a global movement.
        </p>

        <p>
          <span className="first-letter">O</span>ver the years, we have
          organized festivals across six continents, working hand-in-hand with
          local city associations, cultural organizations, and educational
          institutions. Our festivals serve as platforms for academic,
          professional, and cultural exchange, creating lasting bonds between
          communities worldwide.
        </p>

        <p>
          <span className="first-letter">T</span>oday, MOONLIGHT EVENTS stands
          as a testament to the belief that cultural understanding is the
          foundation of global peace. Through our festivals, we continue to
          discover and nurture talents, support creative endeavors, and spread
          information about the rich tapestry of human culture.
        </p>
      </section>
      <section className="services-grid">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <div className="icon" style={{ fontSize: "2rem" }}>
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
      {/* <div className="leadership-section">
        <h2 className="section-title">Leadership Team</h2>
      </div> */}
      <div className="team-grid">
        {leaders.map((leader, index) => (
          <div className="team-card" key={index}>
            <div className="avatar" style={{ backgroundColor: leader.bgColor }}>
              {leader.initials}
            </div>
            <h3>{leader.name}</h3>
            <h4>{leader.role}</h4>
            <p>{leader.description}</p>
          </div>
        ))}
      </div>
      <section className="info-grid">
        <div className="info-card">
          <div className="icon" style={{ fontSize: "2rem" }}>
            🏆
          </div>
          <h3>Awards & Recognition</h3>
          <ul>
            {awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </div>
        <div className="info-card">
          <div className="icon" style={{ fontSize: "2rem" }}>
            🔑
          </div>
          <h3>Key Partners</h3>
          <ul>
            {partners.map((partner, index) => (
              <li key={index}>{partner}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="button-group">
        <h1>Join our mission</h1>
        <h3>
          Whether you’re a municipality looking to host a festival, an artist
          wanting to showcase your talent, or an organization interested in
          cultural collaboration, we’d love to hear from you.
        </h3>
        {buttons.map((button, index) => (
          <button key={index} onClick={button.onClick}>
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
