import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import api from './middleware/api'

const enhancer = applyMiddleware(
  thunk,
  api
);

export default createStore(reducer, composeWithDevTools(enhancer));
