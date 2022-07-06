import { actionTypes } from '../actions';

export const weatherState = {
  weatherList: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = weatherState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        weatherList: [
          ...state.weatherList,
          action.payload,
        ],
      };
    default:
      return state;
  }
};
