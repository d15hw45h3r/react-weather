import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp, condition }) => {
  const Temp = styled.h1`
    font-weight: 400;
  `;
  const State = styled.h3`
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    font-size: 24px;
  `;
  return (
    <>
      <Temp>{temp} °C</Temp>
      <State>{condition}</State>
    </>
  );
};

export default Condition;
