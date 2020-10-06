import React, {useState} from "react";
import axios from "axios";
import WeatherPreview from "./WeatherPreview";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);


    function handleForecastResponse(response){
        setForecast(response.data);
        setLoaded(true);
    }

if (loaded && props.city === forecast.city.name) {
    return  (
    <div className="WeatherForecast row">    
            <WeatherPreview data={forecast.list[0]}/>
            <WeatherPreview data={forecast.list[1]}/>
            <WeatherPreview data={forecast.list[2]}/>
            <WeatherPreview data={forecast.list[3]}/>
            <WeatherPreview data={forecast.list[4]}/>
            <WeatherPreview data={forecast.list[5]}/>
            <WeatherPreview data={forecast.list[6]}/>
    </div>
    );
}else {
    let apiKey ="1d4b68593b5ef58c6ebeb70b9aa9976d";
    let apiUrl =`http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
}
}