import React, { useState } from "react";
import axios from "axios";
import './App.css';

export default function Search() {
    let [city, setCity] = useState(null);
  let [output, setOutput] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72bb9dab46b9ec3d65f423c63f27a9b8&units=metric`;
    axios.get(url).then(showWeather);
    console.log(url);
    function showWeather(response) {
      setTemperature(response.data.main.temp);
      setDescription(response.data.weather[0].description);
      setHumidity(response.data.main.humidity);
      setWind(response.data.wind.speed);
      setIcon(
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
    }

    setOutput(
      <div className="Output">
        <h2>{city}</h2>
        <p>Temperature: {Math.round(temperature)}°C</p>
        <p>Description: {description}</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind: {wind}km/h</p>
        <p>
          Icon: <img src={icon} alt={description} />
        </p>
      </div>
    );
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