// Import React and necessary hooks
import React, { useState } from 'react';
import './BookingPayment.css';

// Define the PaymentsPortal component
function BookingPayment() {
  // State variables to store form data
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cvv, setCVV] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the logic to process the payment
    // For now, let's just log the form data
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('CVV:', cvv);
  };

  return (
    <div className="booking-payment-container">
      <h2>Payments Portal</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            required
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

// Export the PaymentsPortal component
export default BookingPayment;
