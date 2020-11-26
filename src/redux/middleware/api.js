import { FAILURE, REQUEST, SUCCESS } from '../constants';

export const createPostParams = (data) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, type, payload, postData, ...rest } = action;

  next({ ...rest, type: type + REQUEST });

  if (CallAPI){
	  try {
	    const params = postData ? createPostParams(postData) : {};

	    const response = await fetch(CallAPI, params).then(async (res) => {
	      const data = await res.json();
	      if (res.ok) return data;
	      throw data;
	    });

	    return next({ ...rest, type: type + SUCCESS, response });
	  } catch (error) {
	    next({ ...rest, type: type + FAILURE, error });
	  }
  }

};
