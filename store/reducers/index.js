import { HYDRATE } from 'next-redux-wrapper';
import weather from './weather';
import { combineReducers } from 'redux';

const combinedReducer = combineReducers({
  weather,
});

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.weather.seletedTab) {
      //keep seletedTab state
      nextState.weather.seletedTab = state.weather.seletedTab;
    }
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export default rootReducer;
