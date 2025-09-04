import { useState } from "react";
import "../Styles/Faq.css";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span className="faq-toggle">{open ? "−" : "+"}</span>
      </div>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default FAQItem;
