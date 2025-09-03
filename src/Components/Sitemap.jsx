import CircleCard from './CircleCard';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import "./../Styles/SiteMap.css";
import SiteMapToggle from './SiteMapToggle';

export default function SiteMap() {
  const navigate = useNavigate();

  const sections = [
    { title: "Festival", color: "blue", icon: "fa-solid fa-masks-theater", content: "Detailed Info, Cultural Background", route: "/" },
    { title: "Gallery", color: "green", icon: "fa-solid fa-image", content: "Images, Descriptions", route: "/gallery" },
    { title: "About Us", color: "orange", icon: "fa-solid fa-users", content: "Mission & Vision, Awards", route: "/about" },
    { title: "Contact", color: "red", icon: "fa-solid fa-envelope", content: "Contact Info, Social Media", route: "/contact" },
    { title: "FAQ", color: "teal", icon: "fa-solid fa-question", content: "Common Questions & Support", route: "/faq" },
    { title: "Site Map", color: "purple", icon: "fa-solid fa-sitemap", content: "Navigation Overview", route: "/sitemap" },
  ];

  return (
    <Layout>
      <div className="main-wrapper">
        <div className="header">
          <h1>Site Map</h1>
          <p>Navigate through our website structure and discover all available features</p>
          <SiteMapToggle />

          <h2>Interactive Site Structure – Moonlight Events</h2>
          <p>Hover over the icons to view content. Click for full page.</p>
        </div>

        <div className="grid-container">
          {sections.map((sec, idx) => (
            <CircleCard
              key={idx}
              color={sec.color}
              title={sec.title}
              content={sec.content}
              icon={sec.icon}
              onVisit={() => navigate(sec.route)}
            />
          ))}
          <div className="invisible-card" />
          <div className="invisible-card" />
          <div className="invisible-card" />
        </div>
      </div>
    </Layout>
  );
}
