import React from 'react';
import { connect } from 'react-redux';
import Button from '../button';
import useForm from '../../hooks/use-form';

import styles from '../words/words.module.css';
import cn from 'classnames';

import { uploadWord } from '../../redux/actions';

const INITIAL_VALUES = { english: '', russian: '' };

const Upload = ({ words, onSubmit }) => {
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
      <div className={ cn(styles.word, styles.correct) }>
        { words.uploadSuccess ? 'Uploaded succesfully!' : '' }
      </div>
  	</div>
  );
};

export default connect( (state) => ({
    words: state.words
  }),
  (dispatch, props) => ({ 
    onSubmit: (word) => dispatch(uploadWord(word))
}))(Upload);