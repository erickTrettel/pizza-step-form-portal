import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import multi from 'redux-multi';
import { composeWithDevTools } from 'redux-devtools-extension';

import stepper from './stepper';

const reducers = combineReducers({
  stepper,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, promise, multi))
);

export default store;
