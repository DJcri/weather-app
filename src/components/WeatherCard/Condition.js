import React from "react";
import styled from "styled-components";
import Reel from "react-reel";

const Condition = (props) => {
  return (
    <>
      <Reel theme={reelStyle} text={`${props.temp}°C`} />
      <ConditionSec>{props.condition}</ConditionSec>
    </>
  );
};

export default Condition;

const reelStyle = {
  reel: {
    height: "1em",
    display: "flex",
    alignItems: "flex-end",
    overflowY: "hidden",

    /** CUSTOMISE BELOW */
    fontFamily: "Fira Sans",
    fontSize: "1.4rem",
    color: "white",
  },

  group: {
    transitionDelay: "0ms",
    transitionTimingFunction: "ease-in-out",
    transform: "translate(0, 0)",
  },

  number: {
    height: "1em",
  },
};

const ConditionSec = styled.h3`
  font-family: "Merriweather", sans-serif;
  font-size: 1rem;
`;
