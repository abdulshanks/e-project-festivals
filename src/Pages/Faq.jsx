import React, { useState } from "react";
import FAQSection from "../Components/FAQSection ";
import FAQItem from "../Components/FAQItem";
import "../Styles/Faq.css";

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allFaqs = {
    generalInfo: [
      {
        question: "What is MOONLIGHT EVENTS?",
        answer:
          "MOONLIGHT EVENTS is a global organization that organizes cultural festivals around the world...",
      },
      {
        question: "How long has MOONLIGHT EVENTS been operating?",
        answer:
          "We have been organizing festivals for over 15 years since our founding in 2009...",
      },
      {
        question: "What is the mission of MOONLIGHT EVENTS?",
        answer:
          "Our mission is to strengthen young people's understanding of diverse cultures...",
      },
    ],
    festivalParticipation: [
      {
        question: "How can I participate in MOONLIGHT EVENTS festivals?",
        answer:
          "You can participate by registering through our website, contacting local organizers...",
      },
      {
        question: "Are the festivals suitable for all ages?",
        answer:
          "Yes, our festivals are designed to be family-friendly and educational...",
      },
      {
        question: "Do I need to register in advance for festivals?",
        answer:
          "While many festivals are free, some special events require registration...",
      },
      {
        question: "Can I participate if I'm not from...",
        answer:
          "Yes! Our events are designed to be inclusive and welcoming to people of all nationalities and backgrounds...",
      },
    ],
    festivalOrganization: [
      {
        question: "How are festivals chosen and curated?",
        answer:
          "We have a team of cultural experts and anthropologists who research and curate festivals based on their cultural significance...",
      },
      {
        question: "How can I suggest a new festival to feature?",
        answer:
          "You can suggest a festival through our 'Share Your Experience' form on the home page...",
      },
      {
        question: "What types of festivals do you organize?",
        answer:
          "We focus on a diverse range of festivals, including traditional celebrations, music festivals, art exhibitions...",
      },
    ],
    artistsPerformers: [
      {
        question: "How can I perform at a MOONLIGHT EVENTS festival?",
        answer:
          "Artists and performers can submit their portfolios through our official artist portal...",
      },
      {
        question: "Do you offer paid opportunities for performers?",
        answer:
          "Yes, we offer both paid and volunteer opportunities depending on the festival and role...",
      },
    ],
    educationalPrograms: [
      {
        question: "What educational resources do you offer?",
        answer:
          "We provide workshops, lectures, and interactive sessions to enhance the festival experience...",
      },
      {
        question: "Can schools partner with MOONLIGHT EVENTS?",
        answer:
          "We have dedicated programs for educational institutions to facilitate student engagement...",
      },
    ],
    partnershipsSponsorship: [
      {
        question: "How can I become a partner or sponsor?",
        answer:
          "Interested organizations can contact our partnerships team directly...",
      },
      {
        question: "What are the benefits of partnership?",
        answer:
          "Partners gain visibility, brand association with cultural diversity, and access to a global audience...",
      },
    ],
    logisticsSafety: [
      {
        question: "What safety measures are in place at your festivals?",
        answer:
          "We prioritize the safety of all participants and work closely with local authorities...",
      },
      {
        question: "Are there medical services available at the festivals?",
        answer:
          "Yes, all major festivals have on-site medical tents and trained professionals...",
      },
    ],
    technologyAccessibility: [
      {
        question: "Is there a mobile app for the festivals?",
        answer:
          "Some of our larger festivals have dedicated mobile apps with schedules, maps, and information...",
      },
      {
        question:
          "Are your festival venues accessible for people with disabilities?",
        answer:
          "We are committed to making our events accessible and provide detailed accessibility information for each venue...",
      },
    ],
  };

  const filterFaqs = (faqs) => {
    if (!searchTerm) {
      return faqs;
    }
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(lowercasedSearchTerm) ||
        faq.answer.toLowerCase().includes(lowercasedSearchTerm)
    );
  };

  const filteredGeneralInfo = filterFaqs(allFaqs.generalInfo);
  const filteredFestivalParticipation = filterFaqs(
    allFaqs.festivalParticipation
  );
  const filteredFestivalOrganization = filterFaqs(allFaqs.festivalOrganization);
  const filteredArtistsPerformers = filterFaqs(allFaqs.artistsPerformers);
  const filteredEducationalPrograms = filterFaqs(allFaqs.educationalPrograms);
  const filteredPartnershipsSponsorship = filterFaqs(
    allFaqs.partnershipsSponsorship
  );
  const filteredLogisticsSafety = filterFaqs(allFaqs.logisticsSafety);
  const filteredTechnologyAccessibility = filterFaqs(
    allFaqs.technologyAccessibility
  );

  return (
    <div className="faq-page">
      <h1 className="faq-header">Frequently Asked Questions</h1>
      <p className="faq-subtitle">
        Find quick answers to our most common questions.
      </p>
      <input
        type="text"
        className="faq-search"
        placeholder="Search for a question..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredGeneralInfo.length > 0 && (
        <FAQSection
          title="General Information"
          questions={filteredGeneralInfo}
        />
      )}
      {filteredFestivalParticipation.length > 0 && (
        <FAQSection
          title="Festival Participation"
          questions={filteredFestivalParticipation}
        />
      )}
      {filteredFestivalOrganization.length > 0 && (
        <FAQSection
          title="Festival Organization"
          questions={filteredFestivalOrganization}
        />
      )}
      {filteredArtistsPerformers.length > 0 && (
        <FAQSection
          title="Artists and Performers"
          questions={filteredArtistsPerformers}
        />
      )}
      {filteredEducationalPrograms.length > 0 && (
        <FAQSection
          title="Educational Programs"
          questions={filteredEducationalPrograms}
        />
      )}
      {filteredPartnershipsSponsorship.length > 0 && (
        <FAQSection
          title="Partnerships and Sponsorship"
          questions={filteredPartnershipsSponsorship}
        />
      )}
      {filteredLogisticsSafety.length > 0 && (
        <FAQSection
          title="Logistics and Safety"
          questions={filteredLogisticsSafety}
        />
      )}
      {filteredTechnologyAccessibility.length > 0 && (
        <FAQSection
          title="Technology and Accessibility"
          questions={filteredTechnologyAccessibility}
        />
      )}

      {/* Support section remains static */}
      <div className="support-section">
        <h2 className="support-title">Still have questions?</h2>
        <p className="support-text">
          Can't find the answer you're looking for? Our support team is here to
          help.
        </p>
        <div className="support-buttons">
          <button className="contact-btn">📧 Contact Support</button>
          <button className="call-btn">📞 Call +1 (555) 123-4567</button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
