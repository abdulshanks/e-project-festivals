import React, { useState } from "react";
import Card from "./Card";
import DepartmentCard from "./DepartmentCard";
import { departments } from "../data/departmentData";
import "./../styles/Contact.css";

function Contact() {
  const offices = [
    {
      title: "🏢Main Office",
      lines: [
        "🗺 MOONLIGHT EVENTS Ltd.",
        "1234 Celebration St.",
        "New York, NY 10001, USA",
        "📞 Phone: +1 (212) 555-0198",
        "✉ Email: info@moonlightevents.com",
      ],
    },
    {
      title: "🌏 European Office",
      lines: [
        "🗺 MOONLIGHT EVENTS Europe",
        "56 Festival Ave.",
        "Berlin, 10115, Germany",
        "📞 Phone: +49 30 123456",
        "✉ Email: europe@moonlightevents.com",
      ],
    },
    {
      title: "🌏 Asia-Pacific Office",
      lines: [
        "🗺 MOONLIGHT EVENTS Asia-Pacific",
        "88 Harmony Rd.",
        "Tokyo, 100-0001, Japan",
        "📞Phone: +81 3 9876 5432",
        "✉ Email: asia@moonlightevents.com",
      ],
    },
  ];

  const officeHours = [
    {
      region: "🏢 Main Office (EST)",
      weekdays: "Monday – Friday: 9:00 AM – 5:00 PM",
      weekends: "Saturday – Sunday: Closed",
    },
    {
      region: "🌏European Office (CET)",
      weekdays: "Monday – Friday: 9:00 AM – 5:00 PM",
      weekends: "Saturday – Sunday: Closed",
    },
    {
      region: "🌏Asia-Pacific Office (SGT)",
      weekdays: "Monday – Friday: 9:00 AM – 5:00 PM",
      weekends: "Saturday – Sunday: Closed",
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "fab fa-facebook-f", url: "https://facebook.com", },
    { name: "Instagram", icon: "fab fa-instagram", url: "https://instagram.com" },
    { name: "Twitter", icon: "fab fa-twitter", url: "https://twitter.com" },
    { name: "YouTube", icon: "fab fa-youtube", url: "https://youtube.com" },
    { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://linkedin.com" },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, subject, message } = formData;

    if (!fullName || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert("Message sent successfully!");
        setFormData({ fullName: "", email: "", subject: "", message: "" });
      } else {
        alert(result.message || "Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Unable to connect to the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact MOONLIGHT EVENTS</h1>
      <p className="contact-intro">
        Get in touch with us for partnerships, inquiries, or to learn more about our cultural festivals worldwide.
      </p>

      <div className="contact-grid">
        {offices.map((office, index) => (
          <Card key={index} title={office.title} lines={office.lines} />
        ))}
      </div>

      <h1 className="department-heading">Contact by Department</h1>
      <div className="department-grid">
        {departments.map((dept, index) => (
          <DepartmentCard
            key={index}
            title={dept.title}
            email={dept.email}
            phone={dept.phone}
            description={dept.description}
          />
        ))}
      </div>

<div className="follow-us-container">
  <h2 className="department-heading">Follow Us In</h2>
  <div className="social-icons">
    {socialLinks.map((link) => (
      <a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.name}
        className="social-link"
      >
        <div className="icon-label">
          <i className={link.icon}></i>
          <span className="social-name">{link.name}</span>
        </div>
      </a>
    ))}
  </div>
</div>



      <div className="contact-form-container">
        <h2 className="department-heading">Send Us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              className="form-control"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
            />
          </div>
          <div className="form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              className="form-control"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <h2 className="department-heading">Office Hours</h2>
      <div className="department-grid">
        {officeHours.map((entry, index) => (
          <div key={index} className="department-card">
            <h3>{entry.region}</h3>
            <p>🗓 {entry.weekdays}</p>
            <p>🚫 {entry.weekends}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;