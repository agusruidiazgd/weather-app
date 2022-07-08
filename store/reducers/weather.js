import { actionTypes } from '../actions';

export const weatherState = {
  selectedCity: '',
  seletedTab: '',
  forecast: '',
  seletedDate: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = weatherState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_CITY:
      return {
        ...state,
        selectedCity: action.payload,
      };
    case actionTypes.SET_TAB:
      return {
        ...state,
        seletedTab: action.payload,
      };
    case actionTypes.SET_FORECAST:
      return {
        ...state,
        forecast: action.payload,
      };
    case actionTypes.SET_SELECTED_DATE:
      return {
        ...state,
        seletedDate: action.payload,
      };
    default:
      return state;
  }
};
