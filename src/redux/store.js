import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancer = applyMiddleware(
  thunk
);

export default createStore(reducer, composeWithDevTools(enhancer));
