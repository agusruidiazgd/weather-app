export const actionTypes = {
  ADD: 'ADD',
};

export const addNewWeather = (cityWeather) => {
  return {
    type: actionTypes.ADD,
    payload: cityWeather,
  };
};