import React, { useEffect } from 'react';

import Loader from '../loader';

import { createStructuredSelector } from 'reselect';
import { loadJournal } from '../../redux/actions';
import { connect } from 'react-redux';
import {
  journalLoadingSelector,
  journalLoadedSelector,
  journalSelector
} from '../../redux/selectors';

const Journal = ({
  loadJournal,
  loading,
  loaded,
  journal
}) => {

  useEffect(() => {
    if (!loading && !loaded) loadJournal();
  }, []); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

  return (
    <ul>
      {journal.map(({ date, time, _id }) => (
        <li key={ _id }>{ date } — { time }  min</li>
      ))}
    </ul>
  );
};

export default connect(
  createStructuredSelector({
    loading: journalLoadingSelector,
    loaded: journalLoadedSelector,
    journal: journalSelector
  }),
  { loadJournal }
)(Journal);