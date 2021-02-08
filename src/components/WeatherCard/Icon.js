import React from "react";
import styled from "styled-components";

const Icon = (props) => {
  return (
    <IconImg
      className="weather-icon"
      src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
      alt="weather icon"
    />
  );
};

export default Icon;

const IconImg = styled.img`
  width: 50%;
`;
