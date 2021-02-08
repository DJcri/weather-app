import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard/component";
import PulseLoader from "react-spinners/PulseLoader";

const WeatherEngine = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
    icon: null,
  });

  const getWeather = async (q) => {
    setLoading(true);
    try {
      const apiRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=ad9d858445c064c2d477358a7e99ce88`
      );
      const resJSON = await apiRes.json();
      setWeather({
        city: resJSON.name,
        temp: resJSON.main.temp,
        condition: resJSON.weather[0].main,
        country: resJSON.sys.country,
        icon: resJSON.weather[0].icon,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getWeather(props.location);
  }, [props.location]);

  if (error) {
    return (
      <div style={{ color: "black" }}>
        There has been an error
        <br />
        <button onClick={() => setError(false)}>Reset!</button>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          width: "200px",
          justifyContent: "center",
          height: "260px",
          alignItems: "center",
        }}
      >
        <PulseLoader size={15} color="purple" />
      </div>
    );
  }

  return (
    <WeatherCard
      temp={weather.temp}
      condition={weather.condition}
      city={weather.city}
      country={weather.country}
      icon={weather.icon}
      getWeather={getWeather}
    />
  );
};

export default WeatherEngine;
