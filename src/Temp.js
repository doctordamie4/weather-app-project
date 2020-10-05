import React, { useState } from "react";

export default function Temp (props) {
    const [unit, setUnit]= useState("celsius");
    function showFahrenheit(event)  { 
        event.preventDefault();
        setUnit("fahrenheit");
    }
function showCelsius(event)  {
    event.preventDefault();
    setUnit("celsius");
}
    if (unit ==='celsius') {
    return(
        <div className="weather">
        <span className="degree">
        <strong id="grade">{Math.round(props.celsius)}</strong>
        <span className="symbols">
          <a href="/" id="celsius-temp"class="active">°C </a>
           | <a href="/" id="fahrenheit-temp" onClick={showFahrenheit}>°F</a></span>
       </span>
       </div>
    );
}else{
    let fahrenheit = (props.celsius * 9/5) + 32;
    return  (
        <div className="weatherTemp">
        <span className="degree">
        <strong id="grade">{Math.round(fahrenheit)}</strong>
        <span className="symbols">
          <a href="/" id="celsius-temp"class="active">°C</a>
           | <a href="/" id="fahrenheit-temp" onClick={showCelsius}>°F</a></span>
       </span>
       </div>
    );
}
}