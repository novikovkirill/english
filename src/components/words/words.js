import React from 'react';
import styles from './words.module.css';

import Learning from '../learning';
import Upload from '../upload';

const Words = () => {
  
  return (
    <div className={styles.container}>
      <Learning />
      <Upload />
    </div>
  );
};

export default Words;