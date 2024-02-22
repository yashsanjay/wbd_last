// PremiumPlanCard.js

import React from 'react';
import './PremiumPlanCard.css';

const PremiumPlanCard = ({ plan }) => {
  return (
    <div className="premium-plan-card">
      <h2 className="plan-title">{plan.title}</h2>
      <p className="plan-description">{plan.description}</p>
      <div className="plan-details">
        <p className="price">{plan.price}</p>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
};

export default PremiumPlanCard;
