
// Offers.js
import React, { useState } from 'react';
import './Offers.css';
import OfferCard from './OfferCard';


const ClientOffers = () => {
 
  const [offerData, setOfferData] = useState([
    // Initial static offers
    {
            imageSrc: 'data:image/png;base64,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',
            altText: 'Image 1 Alt Text',
            title:"Cred Offer", 
            description:"Get 5% off on your first payment via cred."
          },
          {
            imageSrc: 'https://media.istockphoto.com/id/501631898/vector/gold-sale-10-percent.jpg?s=612x612&w=0&k=20&c=DK1SEZcX_HpyAVpewA-JDq1uZEKVP2fH7oWTXw5amo0=',
            altText: 'Image 2 Alt Text',
            title:"Paytm Offer" ,
            description:"Get up to 10% off by paying via Paytm."
          },
    // Add more offers as needed
  ]);

  

    

  return (
    <div>
      <header>
        <h1>Offers</h1>
      </header>

      {/* <AddOffer onOfferAdd={handleOfferAddition} /> */}
     

      <div id="offerList" className="card-container">
        {offerData.map((offer, index) => (
          <OfferCard
            key={index}
            imageSrc={offer.imageSrc}
            altText={offer.altText}
            title={offer.title}
            description={offer.description}
          />
        ))}
      </div>
      
      
      
    </div>
  );
};

export default ClientOffers;
