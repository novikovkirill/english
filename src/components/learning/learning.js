import React from 'react';
import { connect } from 'react-redux';
import { getWord } from '../../redux/actions';
import Button from '../button';
import styles from '../words/words.module.css';
import Input from '../input';
import cn from 'classnames';

import CheckIcon from './icons/check.svg';
import XIcon from './icons/x.svg';

const icons = {
  check: CheckIcon,
  x: XIcon
};

const Learning = ( {words, getWord} ) => {
  
  const icon = getIcon(words.isCorrect);

  return (
    <div className={ styles.container }>
      <Button primary block onClick={() => getWord()}>
      	Start training
      </Button>
      <div className={ styles.word }>{ words.currentWord }</div>
      <Input no_display={ !words.currentWord }/>
      <div className={ cn(styles.word, { 
      	[styles.incorrect]: words.isCorrect === false,
      	[styles.correct]: words.isCorrect === true
      }) }>
      	{ getCorrectText(words.isCorrect) }
      	{ icon && <img src={icons[icon]} alt={icon} /> }
      </div>
      <div className={ cn(styles.word, styles.incorrect) }>
      	{ words.isEmpty ? getEmptyText() : '' }
      </div>
    </div>
  );
};

const getCorrectText = (correctState) => {
	switch (correctState){
		case true:
			return 'Correct!';
		case false:
			return 'Incorrect!';
		default:
			return '';
	}
}

const getIcon = (correctState) => {
	switch (correctState){
		case true:
			return 'check';
		case false:
			return 'x';
		default:
			return null;
	}
}

const getEmptyText = () => 'The dictionary is empty. Please upload the words!'

export default connect( 
	(state) => ({
		words: state.words
	}), 
	{ getWord })(Learning);