import React from 'react';
import Button from '../button';

import styles from './upload.module.css'

const Upload = () => {
  
  return (
  	<div>
      <form>
        <div>
          <input className={styles.input}
            placeholder="Your word in english"
          />
        </div>
        <div>
          <input className={ styles.input }
            placeholder="Translation in russian"
          />
        </div>
        <div>
          <Button primary block>
            Upload new word
          </Button>
        </div>
      </form>
  	</div>
  );
};

export default Upload;