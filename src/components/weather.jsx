import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getWeatherDataSelector,
  getWeatherErrorSelector,
  getWeatherLoadingSelector,
} from "../store/selectors/WeatherSelectors";
import {
  FETCH_WEATHER,
} from "../store/constants";
import { Button, Card, Form, Spinner } from "react-bootstrap";

const Weather = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getWeatherLoadingSelector);
  const fetchError = useSelector(getWeatherErrorSelector);
  const data = useSelector(getWeatherDataSelector);
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (data) {
      setWeatherData(data);
      setError("");
    }
  }, [data]);

  useEffect(() => {
    if (fetchError) {
      setError(fetchError);
    }
  }, [fetchError]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleFetchWeather = () => {
    dispatch({ type: FETCH_WEATHER, payload: city });
  };
  const dailyData = weatherData?.daily;

  return (
    <div className="container-fluid">
      <div className="flex-column d-flex justify-content-center mx-auto mt-2 align-items-center">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Current Weather</Card.Title>
            <Card.Text>
              <Form.Label htmlFor="inputPassword5">Search City</Form.Label>
              <Form.Control
                type="text"
                id="search"
                value={city}
                onChange={handleCityChange}
                placeholder="Enter city"
              />
            </Card.Text>
            <Button variant="primary" onClick={handleFetchWeather}>
              Search Weather
            </Button>
          </Card.Body>
        </Card>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!error && weatherData && (
          <div>
            <h4>Current Weather in {city}</h4>
            <p>Temperature: {weatherData?.current_weather?.temperature} °C</p>
            <p>Wind Speed: {weatherData?.current_weather?.windspeed} km/h</p>
            <p>Weather Code: {weatherData?.current_weather?.weathercode}</p>
          </div>
        )}
        {loading && <Spinner animation="border" variant="primary" />}
      </div>
      
      <h3 className="m-lg-4">5-Day Weather Forecast</h3>
      <div className="d-flex justify-content-around mb-3">
      {dailyData &&
        dailyData?.time?.slice(1, 6).map((time, index) => (
          <Card key={index} className="">
            <Card.Body>
            <h2><img
              src={`https://openweathermap.org/img/w/09d.png`}
              alt="Weather Icon"
            />{new Date(time).toLocaleDateString()}</h2>
            <p>Max Temperature: {dailyData?.temperature_2m_max[index]} °C</p>
            <p>Min Temperature: {dailyData?.temperature_2m_min[index]} °C</p>
            <p>Max Wind Speed: {dailyData?.wind_speed_10m_max[index]} m/s</p>
            <p>Humidity Max: {dailyData?.relative_humidity_2m_max[index]} %</p>
            <p>Humidity Min: {dailyData?.relative_humidity_2m_min[index]} %</p>
            </Card.Body>
          </Card>
        ))}
        </div>
    </div>
  );
};

export default Weather;
