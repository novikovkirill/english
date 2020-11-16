import { START_TIMER, INCREASE_TIMER, LOG_TIMER, REQUEST } from '../constants';

const initialState = {
	seconds: 0, 
	started: false, 
	timerId: null
}

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
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
