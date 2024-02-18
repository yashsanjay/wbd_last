import React from 'react';
import './Fakejob.css';

const FakeJobAndFrauds = () => {
  return (
    <div className="fake-job-and-frauds">
      <h1 className="section-title">Beware of Fake Job Offers and Frauds</h1>

      <section className="frauds-section fade-in">
        <h2 className="section-subtitle">Recognizing Fake Job Offers</h2>
        <p>
          It has come to our attention that fraudulent individuals may impersonate our company to offer fake job opportunities. Be cautious of offers that seem too good to be true or request personal or financial information upfront.
        </p>
      </section>

      <section className="frauds-section fade-in">
        <h2 className="section-subtitle">How to Verify Job Offers</h2>
        <p>
          Always verify job offers by contacting our official HR department through the contact details listed on our official website. We never ask for payment or personal information during the job application process.
        </p>
      </section>

      <section className="frauds-section fade-in">
        <h2 className="section-subtitle">Reporting Fraudulent Activities</h2>
        <p>
          If you encounter any suspicious job offers or fraudulent activities using our company's name, please report them to our official support team at support@[yourwebsite].com.
        </p>
      </section>

      {/* Add other sections as needed */}
    </div>
  );
};

export default FakeJobAndFrauds;
