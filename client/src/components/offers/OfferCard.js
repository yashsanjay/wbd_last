import React from 'react';
import './Offers.css'; // Import your stylesheet

const OfferCard = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={altText} style={{ height: '300px', width: 'auto' }} />
      <div className="card-content">
        <h3>{title}</h3>
        <p style={{ fontSize: 'larger', fontWeight: 'bold' }}>{description}<br /></p>
        {/* <a href="#" className="buy-now-btn">Buy now</a> */}
      </div>
    </div>
  );
};
export default OfferCard;