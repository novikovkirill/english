import { GET_WORD, CHECK_WORD, CLEAR_CORRECT } from '../constants';
import { words as entities} from '../../fixtures';

const initialState = {
  entities,
  currentWord: null,
  translation: null,
  isCorrect: null
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
  	case GET_WORD:
      const index = Math.floor(state.entities.length*Math.random());
  		return {
  			...state,
  			currentWord: state.entities[index]['english'],
        translation: state.entities[index]['russian'],
        isCorrect: null
  		}
    case CHECK_WORD:
      return {
        ...state,
        isCorrect: payload.isCorrect
      }
    case CLEAR_CORRECT: {
      return {
        ...state,
        isCorrect: null
      }
    }
    default:
      return state;
  }
};