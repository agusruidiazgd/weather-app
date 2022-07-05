import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import rootReducer, { exampleInitialState } from './reducers';

export const makeStore = (initialState = exampleInitialState) =>
  configureStore({
    reducer: rootReducer,
    initialState,
    middleware: composeWithDevTools(applyMiddleware(thunkMiddleware)),
  });
