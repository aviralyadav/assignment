import { FETCH_WEATHER, FETCH_WEATHER_FAIL, FETCH_WEATHER_SUCCESS } from "../constants";

export const fetchWeather = (param) => ({
    type: FETCH_WEATHER,
    payload: param
});

export const receiveWeather = (data) => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: data
});

export const fetchWeatherFailed = (error) => ({
    type: FETCH_WEATHER_FAIL,
    payload: error
});