// DeleteMedicine.js

import React from 'react';
import styles from './AdminPage.module.css'; // Import the CSS module

export default function DeleteMedicine(props) {
  return (
    <div className={styles.offers}>
      <h2 style={{ textAlign: 'center' }}>Delete A Medicine By its Name</h2>
      <form id="delete-med-form">
        <label htmlFor="name">Name:</label>
        <input className={styles.inputcolor} type="text" id="name" name="name" required />
        <button type="submit" onClick={props.medicinedeletionHandler}>Delete medicine</button>
      </form>
    </div>
  );
}
