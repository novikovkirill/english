import { START_TIMER, INCREASE_TIMER, LOG_TIMER, REQUEST, LOAD_JOURNAL, SUCCESS, FAILURE } from '../constants';

const initialState = {
	seconds: 0, 
	started: false, 
	timerId: null,
  journal: [],
  loading: null,
  loaded: null,
  error: null
}

export default (state = initialState, action) => {
  const { type, payload, response, error } = action;
  switch (type) {
    case LOAD_JOURNAL + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_JOURNAL + SUCCESS:
      return {
        ...state,
        journal: response,
        loading: false,
        loaded: true,
      };
    case LOAD_JOURNAL + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
  	case START_TIMER: 
  		return {
  			...state,
  			started: true,
  			timerId: payload
  		}
    case INCREASE_TIMER:
      return {
      		...state,
      		seconds: state.seconds + 1
      	}
    case LOG_TIMER + REQUEST: 
      clearInterval(state.timerId);
    	return {
  			seconds: 0, 
  			started: false, 
  			timerId: null
  		}
    default:
      return state;
  }
};
