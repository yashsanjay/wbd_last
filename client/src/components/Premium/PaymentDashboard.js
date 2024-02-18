
// PaymentDashboard.js

import React from 'react';
import styles from './PaymentDashboard.module.css'; // Import the CSS module
import { useNavigate } from 'react-router-dom';

const PaymentDashboard = () => {
  const navigate=useNavigate();
  const validateForm = () => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var CVV = document.getElementById("CVV").value;

    // Check if all fields are filled out
    if (name === "" || email === "" || phone === "" || CVV === "") {
      alert("Please fill out all fields.");
      return false;
    }

    // Check if phone number is valid
    if (!(/^\d{10}$/.test(phone))) {
      alert("Please enter a valid phone number.");
      return false;
    }
    if (!(/^\d{3}$/.test(CVV))) {
      alert("Please enter a valid 3 digit CVV number.");
      return false;
    }
    navigate('/user');

    return true;
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.maint}></h1>
      <div className={`${styles.section} animated bounceInLeft`}>
        <div className={styles.contact}>
          <h3>Payment Dashboard</h3>
          <form action="http://localhost:3000/"  onSubmit={validateForm}>
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </p>
            <p>
              <label htmlFor="CVV">CVV</label>
              <input type="password" name="CVV" id="CVV" required />
            </p>
            <p>
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" required />
            </p>
            <p>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" name="phone" id="phone" required />
            </p>
            <select name="cars" id="cars" style={{ fontSize: '1.5rem' }}>
              <option value="999">₹999</option>
              <option value="3499">₹3499</option>
              <option value="9999">₹9999</option>
            </select>
            <p className={styles.full}>
              <button type="submit">Click here to pay</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentDashboard;
