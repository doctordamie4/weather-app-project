import React from "react";

export default function WeatherIcon(props) {
    let iconUrl=`https://openweathermap.org/img/wn/${props.code}@2x.png`;
    return(
<div className="clearfix weather-temp">
          <div className="imagery row">
        <img src={iconUrl} alt="icon"id="icon"
        className="float-left"/>
        </div>
        </div>
    );
}