// AdminPage.js

import React, { useState } from 'react';
import styles from './AdminPage.module.css'; // Import the CSS module
import AddOffer from './AddOffer';
import DeleteOffer from './DeleteOffer';
import AddMedicine from './AddMedicine';
import DeleteMedicine from './DeleteMedicine';
import RemoveDoctor from './RemoveDoctor';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  // const [offerdeletion, setOfferDeletion] = useState(false);
  const [medicinedeletion, setMedicineDeletion] = useState(false);
  const [removeDoctor, setRemoveDoctor] = useState(false);
  // const [offerAddition, setOfferAddition] = useState(false);
  const [medicineAddition, setMedicineAddition] = useState(false);

  // const offerdeletionHandler = () => {
  //   // setOfferDeletion(true);
  //   alert('backend is not connected')
  // };

  const medicinedeletionHandler = () => {
    // setMedicineDeletion(true);
    alert('backend is not connected')
  };

  const doctorRemovigHandler = () => {
    // setRemoveDoctor(true);
    alert('backend is not connected')
  };

  // const offerAdditionHandler = () => {
  //   // setOfferAddition(true);
  //   alert('backend is not connected')
  // };

  const medicineAdditionHandler = () => {
    // setMedicineAddition(true);
    alert('backend is not connected')
  };
  const navigationHandler=()=>{

  }

  return (
    <>
      <div className={styles.container}>
        <h1>Admin Page</h1>

        <div className={styles.tables}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>555-1234</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane.smith@example.com</td>
                <td>555-5678</td>
              </tr>
            </tbody>
          </table>
          <RemoveDoctor doctorRemovigHandler={doctorRemovigHandler} />
          {removeDoctor && <p style={{ color: 'red' }}>Doctor Removed</p>}
        </div>

        {/* <AddOffer offerAdditionHandler={offerAdditionHandler} />
        {offerAddition && <p>Offer addition successful.</p>}
        <DeleteOffer offerdeletionHandler={offerdeletionHandler} />

        {offerdeletion && <p style={{ color: 'red' }}>Offer deletion successful</p>} */}
        <AddMedicine medicineAdditionHandler={medicineAdditionHandler} />
        {medicineAddition && <p>Medicine addition successful.</p>}
        <DeleteMedicine medicinedeletionHandler={medicinedeletionHandler} />
        {medicinedeletion && <p style={{ color: 'red' }}>Medicine deletion successful</p>}

        <button onClick={navigationHandler}><Link to={"/offers"} style={{color:'white',textDecoration:'none'}}>Offers-Admin's page</Link></button>
      </div>
    </>
  );
};

export default AdminPage;
