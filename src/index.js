import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Search from "./Search";
import "./search.css";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="Container">
      <h1>Weather Search Engine</h1>
    <Search />
    <br />
      <br />
      <footer>
        <p>
          <a href="https://github.com/NneneA/weather-app-react.git">
            Open-source code
          </a>{" "}
          by Nnene Akinremi.
        </p>
      </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
