import { createSelector } from 'reselect';

const getLoader = (state) => state.weather;
const getCity= (state) => state.weather;
const getError= (state) => state.weather;

export const getWeatherLoadingSelector = createSelector(getLoader, (obj) => obj.loader);
export const getWeatherDataSelector = createSelector(getCity, (obj) => obj.data);
export const getWeatherErrorSelector = createSelector(getError, (obj) => obj.error);