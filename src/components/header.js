import React from "react";
import "../App.css";

import styled from "@emotion/styled";

const header = () => {
  const LinkP = styled.p`
    font-size: 20px;
  `;

  const Link = styled.a`
    color: #fff;
    &:hover {
      color: #b80f46;
    }
  `;

  return (
    <header className="header">
      <h1>Current Weather</h1>
      <p>This is an app that shows you a current weather.</p>
      <LinkP>
        Used <Link href="https://openweathermap.org/">OpenWeatherMap</Link> API.
      </LinkP>
    </header>
  );
};

export default header;
