import React from 'react';
import { connect } from 'react-redux';
import Button from '../button';
import useForm from '../../hooks/use-form';

import styles from './upload.module.css';

import { uploadWord } from '../../redux/actions';

const INITIAL_VALUES = { english: '', russian: '' };

const Upload = ({ onSubmit }) => {
  const { values, handlers, reset } = useForm(INITIAL_VALUES);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(values);
    reset();
  };

  return (
  	<div>
      <form onSubmit={ handleSubmit }>
        <div>
          <input className={ styles.input }
            placeholder="Your word in english"
            { ...handlers.english }
          />
        </div>
        <div>
          <input className={ styles.input }
            placeholder="Translation in russian"
            { ...handlers.russian }
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

export default connect(null, (dispatch, props) => ({
  onSubmit: (word) => dispatch(uploadWord(word)),
}))(Upload);