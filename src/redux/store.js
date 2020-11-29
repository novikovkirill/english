import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import api from './middleware/api'
import { routerMiddleware } from 'connected-react-router';
import history from '../history';

const enhancer = applyMiddleware(
  thunk,
  routerMiddleware(history),
  api
);

export default createStore(reducer, composeWithDevTools(enhancer));
