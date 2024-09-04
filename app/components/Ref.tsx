import React from 'react';
import styles from './Ref.module.css';

const Ref: React.FC = () => {
  return (
    <div className={styles.container}>
      <button className={styles.bigGreenButton}>Press me</button>
    </div>
  );
};

export default Ref;