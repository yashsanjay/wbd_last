// Premium.js

import React from 'react';

import PremiumDocImg from '../../assets/bimg2.jpg';

import styles from './Premium.module.css'; // Import the CSS module
import PremiumBasic from './PremiumBasic';
import PremiumMedium from './PremiumMedium';
import PremiumUltimate from './PremiumUltimate';
import PremiumBenefits from './PremiumBenefits';

const Premium = () => {
  return (
    <div>
      <img src={PremiumDocImg} alt="" />
      <header>
        <h1 style={{color:'white'}}>Premium</h1>
      </header>
      <div className={styles.startbody}>
        <div className={styles.wrapper}>
          <PremiumBasic />
          <PremiumMedium />
          <PremiumUltimate />
        </div>
      </div>
      <br />
      <div className={styles.ofrs}>
        <PremiumBenefits />
      </div>
    </div>
  );
};

export default Premium;
