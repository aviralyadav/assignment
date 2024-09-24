import { put, takeEvery, all, fork } from 'redux-saga/effects'
import { FETCH_WEATHER } from '../constants'
import { fetchWeatherFailed, receiveWeather } from '../actions/weatherAction';
import axios from 'axios';

export function* fetchWeather(action) {
    try {
      // First, get the latitude and longitude for the city
      const geoResponse = yield axios.get('https://geocoding-api.open-meteo.com/v1/search', {
        params: {
          name: action.payload,
        },
      });
      const { latitude, longitude } = geoResponse.data.results[0];
      // Now fetch the weather data using the coordinates
      const weatherResponse = yield axios.get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude: latitude,
          longitude: longitude,
          hourly: 'temperature_2m,relative_humidity_2m,wind_speed_10m,weathercode',
          current_weather: true,
          daily: 'temperature_2m_max,temperature_2m_min,precipitation_sum,relative_humidity_2m_max,relative_humidity_2m_min,wind_speed_10m_max,weathercode',
          timezone: 'Asia/Kolkata',
        },
      });
      yield put(receiveWeather(weatherResponse.data));
    } catch (err) {
      yield put(fetchWeatherFailed('Could not fetch weather data. Please try again.'))
    }
}

export function* watchWeatherWatcher() {
  yield takeEvery(FETCH_WEATHER, fetchWeather)
}

export default function* rootSaga() {
  yield all([
    fork(watchWeatherWatcher),
  ])
}