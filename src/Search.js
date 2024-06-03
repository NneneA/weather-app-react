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

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72bb9dab46b9ec3d65f423c63f27a9b8&units=metric;`;
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
          onChange={updateCity}
        />
        <button type="submit">Search</button>
      </form>
      {loaded && (
        <div className="Output">
          <h2>{cityName}</h2>
          <p>Temperature: {Math.round(temperature)}°C</p>
          <p>Description: {description}</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind: {wind}km/h</p>
          <p>
            Icon: <img src={icon} alt={description} />
          </p>
        </div>
      )}
    </div>
  );
}
