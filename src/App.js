import React from "react";

import "./App.css";
import WeatherEngine from "./components/WeatherCard/WeatherEngine";
import CurrDate from "./components/date";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <CurrDate></CurrDate>
        </div>
        <div className="weather-cards">
          <WeatherEngine location="Kyiv, ua" />
          <WeatherEngine location="Moscow, ru" />
          <WeatherEngine location="London, gb" />
          <WeatherEngine location="Sydney, au" />
          <WeatherEngine location="New York, us" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
