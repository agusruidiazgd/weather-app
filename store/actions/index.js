export const actionTypes = {
  SET_TAB: 'SET_TAB',
  SET_SELECTED_CITY: 'SET_SELECTED_CITY',
  SET_FORECAST: 'SET_FORECAST',
  SET_SELECTED_DATE: 'SET_SELECTED_DATE',
};

export const setNewTab = (tab) => {
  return {
    type: actionTypes.SET_TAB,
    payload: tab,
  };
};

export const setSelectedCity = (city) => {
  return {
    type: actionTypes.SET_SELECTED_CITY,
    payload: city,
  };
};

export const setForecast = (forecast) =>{
  return {
    type: actionTypes.SET_FORECAST,
    payload: forecast,
  };
};

export const setSelectedDate = (date) => {
  return {
    type: actionTypes.SET_SELECTED_DATE,
    payload: date,
  };
}