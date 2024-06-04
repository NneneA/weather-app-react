import React, { useState } from "react";
import axios from "axios";
import "./search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({
    temperature: null,
    description: null,
    humidity: null,
    wind: null,
    icon: null,
    cityName: null,
  });

  function showWeather(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      cityName: response.data.name,
    });
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey="25fad9f7e87157d33dde0f82ab269ee8"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city.."
          value={city}
          onChange={updateCity}
        />
        <button type="submit">Search</button>
      </form>
      {loaded && (
        <div className="Output">
          <h2>{weatherData.cityName}</h2>
          <p>Temperature: {Math.round(weatherData.temperature)}°C</p>
          <p>Description: {weatherData.description}</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind: {weatherData.wind} km/h</p>
          <p>
            Icon: <img src={weatherData.icon} alt={weatherData.description} />
          </p>
        </div>
      )}
    </div>
  );
}
