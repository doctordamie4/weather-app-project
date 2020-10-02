import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather () {
 
  const[weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready:true,
      temperature:response.data.main.temp,
      description:response.data.weather[0].description,
      iconUrl:"http://openweathermap.org/img/wn/10d@2x.png",
      wind:response.data.wind.speed,
      humidity: response.data.main.humidity,
      city:response.data.name
    });

  }
 if (weatherData.ready) {
  return (
    <div>
  <div className="container">
  <div className="card-whole">
    <div className="card-body">
      <div className="row">
      <form id="search-form">
        <div className="col-10">
        <input 
        type="search"
        placeholder="search city 🔍"
        className="form-control"
        id="search-input"
      />
      </div>
      </form>
      <div className="col-0.5">
        <span className = "button">
        <button type="submit" id="press" class="btn btn-info">search</button>
      </span>
      </div>
    </div>
      <br/>
      <form id="current-place">
        <div className="col-6">
        <input 
          type="button"
          value="Current "
          className="form-control"
          id="current-form"
        />
        </div>
      </form>
      
      <hr />
      <h1 className="city">
        <span id="place-city">{weatherData.city}</span> 
      </h1>
      <h2 className="current">
        <ul/>
       <ul>
        <li>
        <div className="clearfix weather-temp">
          <div className="imagery">
        <img src={weatherData.iconUrl} alt={weatherData.descrition}id="icon"
        className="float-left"/>
        <div className="float-left">
          <span className="degree">
            <strong id="grade">{Math.round(weatherData.temperature)}</strong>
            <span className="symbols">
              <a href="/" id="celsius-temp"class="active">°C</a>
               | <a href="/" id="fahrenheit-temp">°F</a></span>
           </span>
           </div>
      </div>
      </div>
      </li>
      </ul>
      </h2>
      
      <h3>
      
      <li>
      <p className="day">
        <strong id="description"> {weatherData.description}</strong>
      </p>
      </li>
      
      </h3>
      <h4>
        
      <li>
      <strong id= "today" >  Updated as of 10:42pm </strong>
        </li>
        
        </h4>
        <br />
       
        <div className="felt">
        <div className="row">
        <div className="col-5">
        <li>
        <strong className="feels"> Feels like </strong>
        <span id= "feel-like"> 17°c</span>
        </li>
        </div> 
        <div className="col-2.5">
        <li>
          <span id="prep">
          Precipitation:{weatherData.Precipitation} 
          </span>
          </li>
          </div>
        </div>
        </div>
      <br />
      <div className="weather-now">
        <div className="row">
      <div className="col-5">
        <li>
        <span id = "weather"> 
          Humidity :  {weatherData.humidity}%
        </span>
         </li>
         </div>
         <div className="col-0.5">
         <li>
        <span id = "weather-wind">
         Wind:{weatherData.wind} km/h
        </span>
        </li>
        </div>
        </div>
        </div> 
      <hr />
      <div className="row weather-forecast" id="forecast">
      <div className="row">
<div className="clearfix weather-temp" >
        mon
    <span className="col-6">
        <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="" id="icon"
        className="float-left"/>
        </span>
        </div>
        <div className="clearfix weather-temp" >
        tues
        <span className="col-6">
        <img src="http://openweathermap.org/img/wn/11d@2x.png" alt="" id="icon"
        className="float-left"/>
        </span>
        </div>
        <div className="clearfix weather-temp" >
            wed
        <span className="col-3">
        <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" id="icon"
        className="float-left"/>
        </span>
        </div>
        <div className="clearfix weather-temp">
        thur
        <span className="col-4">
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" id="icon"
        className="float-left"/>
        </span>
        </div>
        <div className="clearfix weather-temp">
        <small>fri</small>
        <span className="col-">
        <img src="http://openweathermap.org/img/wn/10n@2x.png" alt="" id="icon"
        className="float-left"/>
        </span>
        </div>
        </div>
</div>
</div>
</div>
</div>
<div className="source">
  <a href="https://github.com/doctordamie4/shecodes4"  target="_blank" rel ="noopener noreferrer" >open source code : coded by Nimah Oyeniran</a>
</div>
<div className="Footer">
This app was coded by Nimz and it's open-sourced
<a
href="https://github.com/doctordamie4/weather-app-project"   rel="noopener noreferrer"target="_blank" > open-sourced on Github </a>
<script src="src/index.js"></script>
</div>
</div>

);

 }else{
  let apiKey ="1d4b68593b5ef58c6ebeb70b9aa9976d";
  let city ="New York";
  let apiUrl =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
   return "loading......";
 }
  
  }