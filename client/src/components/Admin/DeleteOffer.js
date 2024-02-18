// DeleteOffer.js
import React, { useState } from 'react';
import styles from './AdminPage.module.css'; // Import the CSS module

export default function DeleteOffer({ onDeleteOffer }) {
  const [titleToDelete, setTitleToDelete] = useState('');

  const handleChange = (e) => {
    setTitleToDelete(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onDeleteOffer(titleToDelete);
    setTitleToDelete('');
  };

  return (
    <div className={styles.offers}>
      <h2 style={{ textAlign: 'center' }}>Delete An Offer By Title</h2>
      <form id="delete-offer-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          className={styles.inputcolor}
          type="text"
          id="title"
          name="title"
          value={titleToDelete}
          onChange={handleChange}
          required
        />
        <button type="submit">Delete offer</button>
      </form>
    </div>
  );
}
