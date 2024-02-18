// PremiumBenefits.js

import React from 'react';
import styles from './Premium.module.css';  // Import the CSS module

export default function PremiumBenefits() {
  return (
    <div className={styles.premiumbenefits}>
      <h3>BENEFITS</h3>
      <ul>
        <li>
          <b>Free Consultation</b>
          <ul>
            <li>Silver premium user will get one free consultation in the span of one month.</li>
            <li>First three Consultations for gold premium users are free.</li>
            <li>Diamond premium user will get one free consultation per month.</li>
          </ul>
        </li>
        <li>
          <b>Discounts</b>
          <p>All premium members will get more discount than regular customers/patients.</p>
        </li>
        <li>
          <b>Fast Delivery</b>
          <p>Premium users will get their products delivered at home on the same day.</p>
        </li>
      </ul>
    </div>
  );
}
