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

function fahrenheit () {
    return (props.celsius * 9)/5 + 32;
}
    if (unit ==="celsius") {
    return(
        <div className="weather">
        <span className="degree">
        <strong id="grade">{Math.round(props.celsius)}</strong>
        <span className="symbols">
        °C
           | <a href="/" id="fahrenheit-temp" onClick={showFahrenheit}>°F</a></span>
       </span>
       </div>
    );
}else{
    return  (
        <div className="weatherTemp">
        <span className="degree">
        <strong id="grade">{Math.round(fahrenheit())}</strong>
        <span className="symbols">
          <a href="/" id="celsius-temp"className="signs" onClick={showCelsius}>°C</a>
           | °F</span>
       </span>
       </div>
    );
}
}