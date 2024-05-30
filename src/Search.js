import React, { useState } from "react";
import axios from "axios";
import "./search.css";

export default function Search() {
  const [city, setCity] = useState(null);
  const [output, setOutput] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setOutput(
      <div className="Output">
        <h2>{city}</h2>
        <p>Temperature: {Math.round(response.data.main.temp)}°C</p>
        <p>Description: {response.data.weather[0].description}</p>
        <p>Humidity: {response.data.main.humidity}%</p>
        <p>Wind: {response.data.wind.speed}km/h</p>
        <p>
          Icon:{" "}
          <img
            src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].description}
          />
        </p>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72bb9dab46b9ec3d65f423c63f27a9b8&units=metric`;
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
      <div>{output}</div>
    </div>
  );
}
