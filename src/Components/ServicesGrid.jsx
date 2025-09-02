// src/components/ServicesGrid.jsx
import ServiceCard from "./ServiceCard";
import "../Styles/About.css";

export default function ServicesGrid() {
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
    <div className="services-grid">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}
