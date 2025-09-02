import SectionHeader from "./SectionHeader";
import SectionText from "./SectionText";
import ActionButtons from "./ActionButtons";

export default function JoinMissionSection() {
  const buttons = [
    { label: "Partner With Us", onClick: () => alert("Partner clicked!") },
    {
      label: "Explore Our Festivals",
      onClick: () => alert("Explore clicked!"),
    },
  ];

  return (
    <div className="join-section">
      <SectionHeader title="Join Our Mission" />
      <SectionText text="Whether you're a municipality looking to host a festival, an artist wanting to showcase your talent, or an organization interested in cultural collaboration, we'd love to hear from you." />
      <ActionButtons buttons={buttons} />
    </div>
  );
}
