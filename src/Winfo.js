import React from "react";
import Date from "./Date";
import Temp from "./Temp"

export default function Winfo(props){
    return (
      <div className="info">
        <div className="Winfo">
               <h1 className="city">
        <span id="place-city">{props.data.city}</span> 
      </h1>
      <h2 className="current">
       <ul>
        <li>
        <div className="clearfix weather-temp">
          <div className="imagery-One">
            <span className="icon-one">
        <img src={props.data.iconUrl} alt="icon"id="icon"
        className="float-left"/>
        </span>
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
          </div>
        </div>
        </div>
      <br />
      <div className="weather-now">
        <div className="row">
      <div className="col-3">
        <li>
        <span id = "weather"> 
          Humidity :  {props.data.humidity}%
        </span>
         </li>
         </div>
         <div className="col-3">
         <li>
        <span id = "weather-wind">
         Wind:{props.data.wind} km/h
        </span>
        </li>
        </div>
        </div>
        </div> 

<hr/>
</div>

</div>

    );
}
    
 
