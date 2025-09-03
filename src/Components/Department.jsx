import React from 'react'
import { departments } from '../data/departmentData'
import DepartmentCard from './DepartmentCard'

const Department = () => {
  return (
    <div className="department-page">
      <h1>Contact by Departments</h1>
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
    </div>
  );
};

export default Department;