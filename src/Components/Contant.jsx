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

  // Updated officeHours array
  const officeHours = [
    {
      region: "Main Office (EST)",
      weekdays: "Monday - Friday: 9:30 AM - 6:00 PM",
      weekends: "Saturday: 10:00 AM - 4:00 PM",
      sunday: "Sunday: Closed",
    },
    {
      region: "European Office (CET)",
      weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
      weekends: "Saturday: 9:00 AM - 1:00 PM",
      sunday: "Sunday: Closed",
    },
    {
      region: "Asia-Pacific Office (SGT)",
      weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
      weekends: "Saturday: 10:00 AM - 2:00 PM",
      sunday: "Sunday: Closed",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      alert("Message sent successfully!");
    }, 2000);
  };

  return (
    <div className="contact-page">
      <h1 className="contact-heading">Get In Touch</h1>
      <p className="contact-intro">
        We're here to help! Whether you have a question, a suggestion, or just
        want to share your festival experience, feel free to reach out to us.
      </p>

      <h2 className="department-heading">Our Offices</h2>
      <div className="contact-grid">
        {offices.map((office, index) => (
          <Card key={index} title={office.title} lines={office.lines} />
        ))}
      </div>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
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
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
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
            {entry.sunday && <p>🚫 {entry.sunday}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
