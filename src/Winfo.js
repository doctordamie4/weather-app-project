import React from "react";
import Date from "./Date";
import Temp from "./Temp"

export default function Winfo(props){
    return (
        <div className="Winfo">
               <h1 className="city">
        <span id="place-city">{props.data.city}</span> 
      </h1>
      <h2 className="current">
       <ul>
        <li>
        <div className="clearfix weather-temp">
          <div className="imagery">
        <img src={props.data.iconUrl} alt={props.data.descrition}id="icon"
        className="float-left"/>
        <div className="float-left">
          <Temp celsius={props.data.temperature} />
         
           </div>
      </div>
      </div>
      </li>
      </ul>
      </h2>
      
      <h3>
      
      <li>
      <p className="day">
        <strong id="description"> {props.data.description}</strong>
      </p>
      </li>
      
      </h3>
      <h4>
        
      <li>
      <strong id= "today" > <Date date={props.data.date} /> </strong>
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
          Precipitation:{props.data.Precipitation} 
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
          Humidity :  {props.data.humidity}%
        </span>
         </li>
         </div>
         <div className="col-0.5">
         <li>
        <span id = "weather-wind">
         Wind:{props.data.wind} km/h
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
}