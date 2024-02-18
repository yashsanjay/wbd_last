// RemoveDoctor.js

import React from 'react';
import styles from './AdminPage.module.css'; // Import the CSS module

export default function RemoveDoctor(props) {
  return (
    <div>
      <form action="" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <input
          className={styles.inputcolor}
          type="email"
          name="email"
          id="email"
          placeholder="Enter email of doctor to delete"
          style={{ height: '40px', width: '300px' }}
        />
        <br />
        <button className={styles.removeButton} onClick={props.doctorRemovigHandler}>Remove</button>
      </form>
    </div>
  );
}
