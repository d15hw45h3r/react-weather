import React from "react";
import "../App.css";
import styled from "@emotion/styled";

const currDate = () => {
  let newDate = new Date();
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  const fullDate = `${month}.${day}.${year}`;

  // STYLES

  const TheDate = styled.div`
    display: block;
    font-size: 25px;
  `;

  // END STYLES
  return <TheDate>Date: {fullDate}</TheDate>;
};

export default currDate;
