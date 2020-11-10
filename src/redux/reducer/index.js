import { combineReducers } from 'redux';

import timer from './timer';
import words from './words';

export default combineReducers({
  timer,
  words
});
