// AddMedicine.js

import React from 'react';
import styles from './AdminPage.module.css'; // Import the CSS module

export default function AddMedicine(props) {
  return (
    <div className={styles.offers}>
      <h2 style={{ textAlign: 'center' }}>Add New Medicine</h2>
      <form action="/medicines" >
        <label htmlFor="image">Image URL:</label>
        <input className={styles.inputcolor} type="text" id="image" name="image" required />
        <label htmlFor="name">Name:</label>
        <input className={styles.inputcolor} type="text" id="name" name="name" required />
        <label htmlFor="m_id">Id:</label>
        <input className={styles.inputcolor} type="text" id="m_id" name="m_id" required />
        <label htmlFor="description">Description:</label>
        <textarea className={styles.inputcolor} id="description" name="description" required></textarea>
        <button type="submit" onClick={props.medicineAdditionHandler}>Submit</button>
      </form>
    </div>
  );
}
