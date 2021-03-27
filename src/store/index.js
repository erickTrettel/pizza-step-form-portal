import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import multi from 'redux-multi';
import { composeWithDevTools } from 'redux-devtools-extension';

import stepper from './stepper';
import dough from './dough';
import crust from './crust';
import daySuggestion from './daySuggestion';
import filling from './filling';
import size from './size';
import pizza from './pizza';

const reducers = combineReducers({
  stepper,
  dough,
  crust,
  filling,
  size,
  daySuggestion,
  pizza,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, promise, multi))
);

export default store;
