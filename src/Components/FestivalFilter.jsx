import React from "react";
import "../styles/Festivals.css";

const FestivalFilter = ({ onFilterChange }) => {
  const locations = [
    "All",
    "Worldwide",
    "India",
    "Japan",
    "Thailand",
    "Mexico",
    "Germany",
    "Ireland",
    "China",
    "USA",
  ];

  const religions = [
    "All",
    "Hinduism",
    "Christianity",
    "Islam",
    "Buddhism",
    "Jewish",
    "Pagan",
    "Sikh",
    "Baha'i",
    "Zoroastrianism",
  ];

  const months = [
    "All",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="filter-container">
      <div className="filter-header">
        <span className="filter-icon">
          <i className="fas fa-filter"></i>
        </span>
        <h2 className="filter-title">Filter Festivals</h2>
      </div>
      <div className="filter-options">
        <div className="filter-group">
          <label className="filter-label">Location</label>
          <select
            className="filter-select"
            onChange={(e) => {
              onFilterChange({
                location: e.target.value,
                religion: "All",
                month: "All",
              });
            }}
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label className="filter-label">Religion/Culture</label>
          <select
            className="filter-select"
            onChange={(e) => {
              onFilterChange({
                location: "All",
                religion: e.target.value,
                month: "All",
              });
            }}
          >
            {religions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label className="filter-label">Month</label>
          <select
            className="filter-select"
            onChange={(e) => {
              onFilterChange({
                location: "All",
                religion: "All",
                month: e.target.value,
              });
            }}
          >
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FestivalFilter;
