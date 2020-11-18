import { GET_WORD, CHECK_WORD, CLEAR_CORRECT, LOAD_WORDS, REQUEST, SUCCESS, FAILURE, CLEAR_EMPTY } from '../constants';

const initialState = {
  entities: [],
  currentWord: null,
  translation: null,
  isCorrect: null,
  isEmpty: null
}

export default (state = initialState, action) => {
  const { type, payload, response, error } = action;

  switch (type) {
    case LOAD_WORDS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_WORDS + SUCCESS:
      return {
        ...state,
        entities: response,
        loading: false,
        loaded: true,
      };
    case LOAD_WORDS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
  	case GET_WORD:
      const { isEmpty } = payload;      
      const index = isEmpty ? null: Math.floor(state.entities.length*Math.random());
  		return {
  			...state,
  			currentWord: isEmpty ? null : state.entities[index]['english'],
        translation: isEmpty ? null : state.entities[index]['russian'],
        isCorrect: null,
        isEmpty
  		}
    case CLEAR_EMPTY: 
      return {
        ...state,
        isEmpty: null
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