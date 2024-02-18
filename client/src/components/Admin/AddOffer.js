// AddOffer.js
import React, { useState } from 'react';
import styles from './AdminPage.module.css'; // Import the CSS module

export default function AddOffer({ onOfferAdd }) {
  const [newOffer, setNewOffer] = useState({
    imageSrc: '', // Change 'image' to 'imageSrc'
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOffer((prevOffer) => ({ ...prevOffer, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onOfferAdd(newOffer);
    setNewOffer({
      imageSrc: '', // Change 'image' to 'imageSrc'
      title: '',
      description: '',
    });
  };

  return (
    <div className={styles.offers}>
      <h2 style={{ textAlign: 'center' }}>Add New Offer</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="imageSrc">Image URL:</label>
        <input
          className={styles.inputcolor}
          type="text"
          id="imageSrc"
          name="imageSrc" // Change 'image' to 'imageSrc'
          value={newOffer.imageSrc} // Change 'image' to 'imageSrc'
          onChange={handleChange}
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          className={styles.inputcolor}
          type="text"
          id="title"
          name="title"
          value={newOffer.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          className={styles.inputcolor}
          id="description"
          name="description"
          value={newOffer.description}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
