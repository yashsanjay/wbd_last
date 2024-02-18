// PremiumUltimate.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './Premium.module.css';  // Import the CSS module

export default function PremiumUltimate() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/PaymentDashboard');
  };

  return (
    <div className={styles.table}>
      <div className={styles.priceSection}>
        <div className={styles.innerArea} style={{background:'rgb(130,198,243)'}}>
          <span className={styles.text}></span>
          <span className={styles.price}>₹9999 <br /></span>
        </div>
      </div>
      <div className={styles.packageName}></div>
      <ul className={styles.features}>
        <li>
          <span className={styles.listName} style={{ fontWeight: 'bolder', fontSize: '1.2rem' }}>Plan valid for 1 month</span>
        </li>
        <li>
          <span className={styles.listName}>24/7 Services</span>
          <span className={`${styles.icon} ${styles.check}`}><FontAwesomeIcon icon={faCheck} /></span>
        </li>
        <li>
          <span className={styles.listName}>Free medicine delivery</span>
          <span className={`${styles.icon} ${styles.check}`}><FontAwesomeIcon icon={faCheck} /></span>
        </li>
        <li>
          <span className={styles.listName}>Routine body checkup with offers and reminders for next checkups</span>
          <span className={`${styles.icon} ${styles.check}`}><FontAwesomeIcon icon={faCheck} /></span>
        </li>
        <li>
          <span className={styles.listName}>Free follow-up consultations</span>
          <span className={`${styles.icon} ${styles.check}`}><FontAwesomeIcon icon={faCheck} /></span>
        </li>
        <li>
          <span className={styles.listName}>No waiting time for a consultation with a doctor</span>
          <span className={`${styles.icon} ${styles.check}`}><FontAwesomeIcon icon={faCheck} /></span>
        </li>
      </ul>
      <div className={styles.btn}>
        <button style={{ color: '#82c6f3' }} onClick={clickHandler}>
          Purchase
        </button>
      </div>
    </div>
  );
}
