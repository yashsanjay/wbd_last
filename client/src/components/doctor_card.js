import React from 'react';

function DoctorCard({ name, specialty, availability, imageSrc }) {
  return (
    <div className="doctor-card">
      <img src={imageSrc} alt={name} />
      <h3>{name}</h3>
      <p>Specialty: {specialty}</p>
      <p>Availability: {availability}</p>
    </div>
  );
}

export default DoctorCard;
