import React from "react";
import FAQItem from "./FAQItem";
import "../Styles/Faq.css";

const FAQSection = ({ title, questions }) => {
  return (
    <div className="faq-section">
      <h2 className="faq-section-title">{title}</h2>
      {questions.map((q, index) => (
        <FAQItem key={index} question={q.question} answer={q.answer} />
      ))}
    </div>
  );
};

export default FAQSection;
