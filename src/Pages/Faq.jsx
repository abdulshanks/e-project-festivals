import React from "react";

import FAQSection from "../Components/FAQSection ";
import FAQItem from "../Components/FAQItem";
import "../Styles/Faq.css";

const FAQPage = () => {
  const generalInfo = [
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
  ];

  const festivalParticipation = [
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
      question:
        "Can I participate if I'm not from the culture being celebrated?",
      answer:
        "Absolutely! Our festivals welcome people from all backgrounds...",
    },
  ];
  const generalInf = [
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
  ];

  const festivalParticipate = [
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
      question:
        "Can I participate if I'm not from the culture being celebrated?",
      answer:
        "Absolutely! Our festivals welcome people from all backgrounds...",
    },
  ];

  const festivalOrganization = [
    {
      question: "How can my city host a MOONLIGHT EVENTS festival?",
      answer:
        "Cities interested in hosting can contact us through our partnership program...",
    },
    {
      question: "What support does MOONLIGHT EVENTS provide to host cities?",
      answer:
        "We provide event planning, logistics, cultural programming, and post-event evaluation...",
    },
    {
      question: "How far in advance should we plan a festival?",
      answer:
        "We recommend planning 6–12 months in advance for major festivals...",
    },
  ];

  const artistsPerformers = [
    {
      question: "How can artists and performers get involved?",
      answer:
        "Artists and performers can apply through our talent discovery program...",
    },
    {
      question: "Do you provide compensation for performers?",
      answer:
        "Compensation varies depending on the festival, performance type, and duration...",
    },
    {
      question: "What types of performances are you looking for?",
      answer:
        "We seek authentic cultural performances including music, dance, storytelling, and culinary presentations...",
    },
  ];

  const educationalPrograms = [
    {
      question: "Do you offer educational workshops?",
      answer:
        "Yes, we conduct workshops on cultural appreciation, diversity, history, and traditional arts...",
    },
    {
      question: "Can schools participate in your programs?",
      answer:
        "Absolutely! We offer programs designed for schools, including field trips and cultural exchange activities...",
    },
    {
      question: "Do you provide educational materials?",
      answer:
        "Yes, we provide materials such as cultural guides, activity sheets, and downloadable resources for teachers...",
    },
  ];

  const partnershipsSponsorship = [
    {
      question: "How can organizations partner with MOONLIGHT EVENTS?",
      answer: "Organizations can join through sponsorship or collaboration...",
    },
    {
      question: "What are the benefits of sponsoring a festival?",
      answer:
        "Sponsors gain visibility, engagement, and cultural contribution...",
    },
    {
      question: "Can we suggest a festival for you to organize?",
      answer: "Yes! We welcome suggestions from communities...",
    },
  ];

  const logisticsSafety = [
    {
      question: "How do you ensure safety at festivals?",
      answer:
        "We work with local authorities, provide first aid, and conduct security assessments...",
    },
    {
      question: "What should I bring to a festival?",
      answer:
        "Bring comfortable clothing, water, sunscreen, and an open mind...",
    },
    {
      question: "Are festivals held rain or shine?",
      answer:
        "Most outdoor festivals proceed rain or shine, though severe weather may change plans...",
    },
  ];

  const technologyAccessibility = [
    {
      question: "Are your festivals accessible to people with disabilities?",
      answer:
        "Yes, we provide accessible parking, sign language interpreters, and wheelchair access...",
    },
    {
      question: "Do you have a mobile app for festivals?",
      answer: "We are developing apps with schedules, maps, and updates...",
    },
    {
      question: "How can I stay updated on upcoming festivals?",
      answer:
        "Follow our website, social media, and newsletters for updates...",
    },
  ];

  return (
    <div className="faq-page">
      <h1 className="faq-header">Frequently Asked Questions</h1>
      <p className="faq-subtitle">
        Find answers to common questions about MOONLIGHT EVENTS, our festivals,
        and how to get involved
      </p>

      <input
        className="faq-search"
        type="text"
        placeholder="Search frequently asked questions..."
      />

      <FAQSection title="General Information" questions={generalInfo} />
      <FAQSection
        title="Festival Participation"
        questions={festivalParticipation}
      />
      {/* Sections */}
      <FAQSection title="General Information" questions={generalInfo} />
      <FAQSection
        title="Festival Participation"
        questions={festivalParticipation}
      />
      <FAQSection
        title="Festival Organization"
        questions={festivalOrganization}
      />
      <FAQSection
        title="Artists and Performers"
        questions={artistsPerformers}
      />
      <FAQSection
        title="Educational Programs"
        questions={educationalPrograms}
      />
      <FAQSection
        title="Partnerships and Sponsorship"
        questions={partnershipsSponsorship}
      />
      <FAQSection title="Logistics and Safety" questions={logisticsSafety} />
      <FAQSection
        title="Technology and Accessibility"
        questions={technologyAccessibility}
      />
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
