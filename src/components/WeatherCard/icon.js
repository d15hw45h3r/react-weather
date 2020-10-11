import React from "react";
import styled from "@emotion/styled";

const Icon = ({ condition }) => {
  const Icon = styled.img`
    width: 40%;
    margin: 0 auto;
  `;

  var icon = "";

  switch (condition) {
    case "Clouds":
      icon = `./files/weather-icons/clouds.png`;
      break;
    case "Clear":
      icon = `./files/weather-icons/sun.png`;
      break;
    case "Haze":
      icon = `./files/weather-icons/haze.png`;
      break;
    case "Hail":
      icon = `./files/weather-icons/hail.png`;
      break;
    case "Fog":
      icon = `./files/weather-icons/fog.png`;
      break;
    case "Tornado":
      icon = `./files/weather-icons/tornado.png`;
      break;
    case "Dust":
      icon = `./files/weather-icons/dust.png`;
      break;
    case "Mist":
      icon = `./files/weather-icons/fog.png`;
      break;
    case "Snow":
      icon = `./files/weather-icons/snow.png`;
      break;
    case "Rain":
      icon = `./files/weather-icons/rain.png`;
      break;
    case "Drizzle":
      icon = `./files/weather-icons/drizzle.png`;
      break;
    case "Thunderstorm":
      icon = `./files/weather-icons/storm.png`;
      break;
    default:
      icon = `./files/weather-icons/celsius.png`;
      break;
  }

  return <Icon src={icon} alt="Weather icon" />;
};

export default Icon;
