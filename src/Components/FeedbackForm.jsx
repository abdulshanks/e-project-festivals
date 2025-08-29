import React from "react";
import "../Styles/Festivals.css";

const FeedbackForm = () => {
  return (
    <div className="feedback-form-card">
      <div className="feedback-header">
        <h4>Share Your Festival Experience</h4>
      </div>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="feedback-category">Feedback Category</label>
          <select id="feedback-category" name="feedback-category">
            <option value="">Select a category</option>
            <option value="general">General Feedback</option>
            <option value="suggestion">New Feature Suggestion</option>
            <option value="cultural-thought">
              Thoughts on Cultural Celebrations
            </option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="feedback-message">
            Tell us about your experience with festivals, suggest new ones to
            feature, or share your thoughts on cultural celebrations...
          </label>
          <textarea
            id="feedback-message"
            name="feedback-message"
            rows="4"
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Submit Feedback
          </button>
          <button type="button" className="contact-btn">
            Contact Us Directly
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
