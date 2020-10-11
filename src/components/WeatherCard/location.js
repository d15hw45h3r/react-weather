import React from "react";
import styled from "@emotion/styled";

const Location = ({ city, country }) => {
  const Container = styled.div``;

  const City = styled.h1`
    font-size: 28px;
  `;
  const Country = styled.h3`
    font-weight: 400;
    font-size: 20px;
  `;

  return (
    <Container>
      <City>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;
