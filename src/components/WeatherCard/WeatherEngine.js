import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import WeatherCard from "./component";
import { apiKey } from "./apiKey";

const WeatherEngine = ({ location }) => {
  //STYLES
  const Load = styled.div`
    color: #fff;
  `;
  //END STYLES
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState("Kyiv, ua");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  // data fetching function
  const getWeather = async (q) => {
    setQuery("");
    setLoading(true);
    try {
      const api = apiKey.key;
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=${api}`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.sys.country,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // handling search requests
  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div>
      {!loading && !error ? (
        <div>
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
          />
          <form className="search-form">
            <input
              className="search-input"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="search-btn" onClick={(e) => handleSearch(e)}>
              Search
            </button>
          </form>
        </div>
      ) : loading ? (
        <Load>Loading...</Load>
      ) : !loading && error ? (
        <Load>
          <p>Something went wrong...</p>
          <button onClick={() => setError(false)} className="btn-reset">
            Reset
          </button>
        </Load>
      ) : null}
    </div>
  );
};

export default WeatherEngine;
