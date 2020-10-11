import React from "react";
import styled from "@emotion/styled";

import Location from "./location";
import Icon from "./icon";
import Condition from "./condition";

const WeatherCard = ({ temp, condition, city, country }) => {
  let highColor = 0;
  let lowColor = 0;
  let redColor = 0;
  let blueColor = 0;
  if (temp > 20) {
    highColor = (1 - (temp - 20) / 25) * 255;
    lowColor = highColor - 150;
    redColor = 255;
    blueColor = 0;
  } else if (temp <= 20) {
    highColor = (1 - (temp + 30) / 52) * 255;
    lowColor = highColor - 150;
    redColor = 0;
    blueColor = 255;
  }

  const Card = styled.div`
    margin: 0 auto;
    margin-right: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 200px;
    height: 250px;
    text-align: center;
    border-radius: 26px;
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: linear-gradient(
      to top,
      rgb(${redColor}, ${highColor}, ${blueColor}),
      rgb(${redColor}, ${lowColor}, ${blueColor})
    );
  `;

  return (
    <Card>
      <Location city={city} country={country} />
      <Icon condition={condition} />
      <Condition temp={temp} condition={condition} />
    </Card>
  );
};

export default WeatherCard;
