import React, {useState} from "react";
import Winfo from "./Winfo";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";


export default function Weather (props) {
  const [weatherData, setWeatherData] = useState({ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready:true,
      date: new Date(response.data.dt * 1000),
      temperature:response.data.main.temp,
      description:response.data.weather[0].description,
      iconUrl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind:response.data.wind.speed,
      humidity: response.data.main.humidity,
      city:response.data.name
    });
  }
  function search() {
    let apiKey ="1d4b68593b5ef58c6ebeb70b9aa9976d";
    let apiUrl =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  function handleSubmit(event) {
  event.preventDefault();
  search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
 if (weatherData.ready) {
  return (
    <div className="Weather">
  <div className="container">
  <div className="card-whole">
    <div className="card-body">
      <div className="row">
      <form onSubmit={handleSubmit} id="search-form">
        <div className="col-10">
        <input 
        type="search"
        placeholder="search city 🔍"
        className="form-control"
        id="search-input"
        autoFocus="on"
        onChange={handleCityChange}
      />
      </div>
      
      <div className="col-0.5">
        <span className = "button">
        <button type="submit" id="press" class="btn btn-info">search</button>
      </span>
      </div>
      </form>
    </div>
    <hr/>
      <br/>
      <Winfo data={weatherData}/>
      <WeatherForecast city={weatherData.city} />
     
      <hr /> 
      </div>
      </div>
      </div>
      </div>
      );
    } else {
    search();
   return "Loading......";
 }
  }
