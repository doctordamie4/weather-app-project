import React from "react";
import "./Weather.css";

export default function Weather () {
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
            <span id="place-city"> London,United Kingdom </span> 
          </h1>
          <h2 className="current">
            <ul/>
           
            <li>
            <div className="clearfix weather-temp">
              <div className="imagery">
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" id="icon"
            class ="float-left"/>
            <div className="float-left">
              <span className="degree">
                <strong id="grade">20</strong>
                <span class="symbols">
                  <a href="/" id="celsius-temp"class="active">°C</a>
                   | <a href="/" id="fahrenheit-temp">°F</a></span>
               </span>
               </div>
          </div>
          </div>
          </li>
          </h2>
          
          <h3>
          <li>
          <p class="day">
            <strong id="description"> Light Rain </strong>
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
          <div class="col-5">
            <li>
            <strong className="feels"> Feels like </strong>
            <span id= "feel-like"> 17°c</span>
            </li>
            </div>
            <div className="col-2.5">
            <li>
              <span id="prep">
              Precipitation:
              </span>
            </li>
            </div>
            </div>
            </div>
          <br />
          <p>
            <ul/>
          <div className="weather-now">
            <div className="row">
          <div class="col-5">
            <li>
            <span id = "weather"> 
              Humidity :   
            </span>
             </li>
             </div>
             <div class="col-0.5">
             <li>
            <span id = "weather-wind">
              Wind :
            </span>
            </li>
            </div>
            </div>
          </div>
            
        </p>
          
          <hr />
          <div class="row weather-forecast" id="forecast">
          </div>
          <div class="row">
    <div class="clearfix weather-temp" >
            mon
        <span class="col-6">
            <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="" id="icon"
            class ="float-left"/>
            </span>
            </div>
            <div class="clearfix weather-temp" >
            tues
            <span class="col-6">
            <img src="http://openweathermap.org/img/wn/11d@2x.png" alt="" id="icon"
            class ="float-left"/>
            </span>
            </div>
            <div class="clearfix weather-temp" >
                wed
            <span class="col-3">
            <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" id="icon"
            class ="float-left"/>
            </span>
            </div>
            <div class="clearfix weather-temp">
            thur
            <span class="col-4">
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" id="icon"
            class ="float-left"/>
            </span>
            </div>
            <div class="clearfix weather-temp">
            <small>fri</small>
            <span class="col-3">
            <img src="http://openweathermap.org/img/wn/10n@2x.png" alt="" id="icon"
            class ="float-left"/>
            </span>
            </div>
          
            </div>
        </div>
      </div>
    </div>
    <div class="source">
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