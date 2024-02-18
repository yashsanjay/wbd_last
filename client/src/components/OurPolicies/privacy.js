import React from 'react';
import './privacy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1 className="section-title">Privacy Policy</h1>

      <section className="privacy-section fade-in">
        <h2 className="section-subtitle">Information We Collect</h2>
        <p>
          1. <strong>Personal Information:</strong> When you create an account or schedule an appointment, we collect personal information such as your name, email address, phone number, and address.
        </p>
        {/* Add other points as needed */}
      </section>

      <section className="privacy-section fade-in">
        <h2 className="section-subtitle">How We Use Your Information</h2>
        <p>
          1. <strong>Appointment Management:</strong> We use your personal and medical information to schedule and manage doctor appointments efficiently.
        </p>
        {/* Add other points as needed */}
      </section>

      <section className="privacy-section fade-in">
        <h2 className="section-subtitle">Information Sharing</h2>
        <p>
          1. <strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in providing and improving our services.
        </p>
        {/* Add other points as needed */}
      </section>

      {/* Add other sections as needed */}

    </div>
  );
};

export default PrivacyPolicy;
