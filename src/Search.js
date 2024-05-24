import React from "react";
import axios from "axios";
import './App.css';

export default function Search() {
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