// AboutUs.js

import React from 'react';
import Section from './Section';
import './aboutus.css'; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Section title="Our Mission" className="about-us-section">
        <p>
          Opiherbs is on a mission to make quality healthcare affordable and accessible for over a billion+ Indians. We believe in empowering our users with the most accurate, comprehensive, and curated information and care, enabling them to make better healthcare decisions.
        </p>
      </Section>

      <Section title="Health is a habit" className="about-us-section">
        <p>
          It is the journey that takes you to new destinations every day with endless possibilities of life on the back of happiness, energy, and hope. Opiherbs wants to make this journey easy for every Indian and help them live healthier and longer lives.
        </p>
      </Section>

      <Section title="Our offerings" className="about-us-section">
        <div className="about-us-image-container">
          {/* Add content for offerings */}
        </div>
      </Section>

      {/* Add more sections as needed */}

      <Section title="Connect" className="about-us-section">
        <img src="https://www.practo.com/providers/static/images/pages/company/about/connect.svg" alt="Connect" height="100px" />
        <p>
          We understand healthcare goes beyond signs, symptoms, diagnosis, and treatment. It's about the deep connection between doctors and patients that leads to continuous care and sustained, better outcomes.
        </p>
      </Section>

      <Section title="Trust" className="about-us-section">
        {/* Add content for Trust section */}
      </Section>

      <Section title="Transparency" className="about-us-section">
        {/* Add content for Transparency section */}
      </Section>

      <Section title="Data privacy and security is our top priority" className="about-us-section">
        <img src="https://www.Practo.com/providers/static/images/pages/company/about/security.png" alt="Security" />
        <p>
          Data privacy and security have always served as one of the founding philosophies of Opiherbs, and we go to great lengths to safeguard the confidentiality and integrity of our users.
        </p>
      </Section>

      <Section title="Our investors share our vision" className="about-us-section">
        <p>
          "Opiherbs is revolutionizing healthcare by enabling consumers to find the best doctors, book instant appointments, consultations, and make better, more informed health decisions. It is our privilege to work with Opiherbs, to scale and bring Opiherbs to billions of consumers around the globe."
        </p>
      </Section>

      {/* <Footer /> */}
    </div>
  );
};

export default AboutUs;
