import {
	START_TIMER,
	LOG_TIMER,
	INCREASE_TIMER,
  GET_WORD,
  CHECK_WORD,
  CLEAR_INTERVAL,
  SECOND,
  CLEAR_CORRECT,
  LOAD_WORDS
} from './constants';

export const startTimer = () => async(dispatch, getState) => {
	const timerId = setInterval(()=> {
      dispatch({type: INCREASE_TIMER});
    }, SECOND);
    dispatch({
    	type: START_TIMER, 
    	payload: timerId
    });
};

export const logTimer = (seconds) => ({
  type: LOG_TIMER,
  CallAPI: 'api/timer',
  postData: {time: seconds}
});

export const loadWords = () => ({
  type: LOAD_WORDS,
  CallAPI: '/api/words',
});

export const getWord = () => ({type: GET_WORD});

export const checkWord = (word) => async(dispatch, getState) => {
  const isCorrect = word.toLowerCase().trim() === getState().words.translation.toLowerCase().trim()
  dispatch({type: CHECK_WORD, payload: { isCorrect }});
  setTimeout(() => {
    dispatch({type: isCorrect ? GET_WORD : CLEAR_CORRECT});
  }, CLEAR_INTERVAL);
};