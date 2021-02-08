import React from "react";
import styled from "styled-components";
import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";
import { motion } from "framer-motion";

const WeatherCard = (props) => {
  let red = 0;
  let blue = 0;
  let highColor;
  let lowColor;

  if (props.temp > 12) {
    highColor = (1 - (props.temp - 12) / 28) * 255;
    lowColor = highColor - 150;
    red = 255;
  } else {
    highColor = (1 - (props.temp + 20) / 32) * 255;
    lowColor = highColor - 150;
    blue = 255;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(
      to top,
      rgb(${red}, ${highColor}, ${blue}),
      rgb(${red}, ${lowColor}, ${blue})
    );
    width: 200px;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Card>
        <Location
          city={props.city}
          country={props.country}
          getWeather={props.getWeather}
        />
        <Icon condition={props.condition} icon={props.icon} />
        <Condition temp={props.temp} condition={props.condition} />
      </Card>
    </motion.div>
  );
};

export default WeatherCard;
