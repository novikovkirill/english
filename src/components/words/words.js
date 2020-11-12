import React, { useEffect } from 'react';
import styles from './words.module.css';

import Learning from '../learning';
import Upload from '../upload';
import Loader from '../loader';

import { createStructuredSelector } from 'reselect';
import { loadWords } from '../../redux/actions';
import { connect } from 'react-redux';
import {
  wordsLoadingSelector,
  wordsLoadedSelector,
} from '../../redux/selectors';

const Words = ({
  loadWords,
  loading,
  loaded
}) => {
  
  useEffect(() => {
    if (!loading && !loaded) loadWords();
  }, []); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

  return (
    <div className={styles.container}>
      <Learning />
      <Upload />
    </div>
  );
};

export default connect(
  createStructuredSelector({
    loading: wordsLoadingSelector,
    loaded: wordsLoadedSelector,
  }),
  { loadWords }
)(Words);