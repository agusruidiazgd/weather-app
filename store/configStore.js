import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const initStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware()));
};

export const wrapper = createWrapper(initStore);

