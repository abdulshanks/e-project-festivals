// src/components/LeadershipSection.jsx
import TeamMemberCard from "./TeamMemberCard";
import InfoCard from "./InfoCard";

export default function LeadershipSection() {
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
      description:
        "Expert in cross-cultural communication and festival curation",
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

  return (
    <div className="leadership-section">
      <h2 className="section-title">Leadership Team</h2>

      {/* Team Members */}
      <div className="team-grid">
        {leaders.map((leader, index) => (
          <TeamMemberCard key={index} {...leader} />
        ))}
      </div>

      {/* Info Section */}
      <div className="info-grid">
        <InfoCard icon="🏆" title="Awards & Recognition" items={awards} />
        <InfoCard icon="🔑" title="Key Partners" items={partners} />
      </div>
    </div>
  );
}
