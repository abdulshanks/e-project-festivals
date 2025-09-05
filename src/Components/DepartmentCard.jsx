import React from "react";
import "./../styles/Contact.css";

const DepartmentCard = ({ title, email, phone, description }) => {
  return (
    <div className="department-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default DepartmentCard;
