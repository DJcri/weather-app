import React, { useEffect, useState } from "react";
import WeatherEngine from "./components/WeatherEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="tokyo, jp" />
      <WeatherEngine location="london, uk" />
      <WeatherEngine location="beijing, cn" />
    </div>
  );
}

export default App;
