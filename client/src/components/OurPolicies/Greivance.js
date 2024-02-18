import React from 'react';
import './Greivance.css';

const GrievancesAndRedressal = () => {
  return (
    <div className="grievances-and-redressal">
      <h1 className="section-title">Grievances and Redressal</h1>

      <section className="grievances-section fade-in">
        <h2 className="section-subtitle">Submitting a Grievance</h2>
        <p>
          If you have any concerns or grievances related to our services, you can submit a complaint by contacting our support team at support@[yourwebsite].com.
        </p>
      </section>

      <section className="grievances-section fade-in">
        <h2 className="section-subtitle">Redressal Process</h2>
        <p>
          Our team will thoroughly review your grievance and initiate the redressal process. We are committed to resolving issues promptly and ensuring customer satisfaction.
        </p>
      </section>

      <section className="grievances-section fade-in">
        <h2 className="section-subtitle">Escalation</h2>
        <p>
          If you are not satisfied with the resolution provided, you have the option to escalate your grievance to higher levels of management. Contact details for escalation will be provided upon request.
        </p>
      </section>

      {/* Add other sections as needed */}
    </div>
  );
};

export default GrievancesAndRedressal;
