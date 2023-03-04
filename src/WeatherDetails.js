import React, { useEffect, useState } from 'react'
import './style.css';
import mist from "./Mist.jpg"
import rain from "./Rain5.jpg"
import sunny from './Sunny.jpg'
import haze from "./foggy.webp"
import clouds from "./clouds.jpg"

function WeatherDetails({
    temp,
    humidity,
    pressure,
    weatherType,
    name,
    speed,
    country,
    sunset,
  }

) {
    const [weatherState, setWeatherState] = useState("");
    useEffect(() => {
        if (weatherType) {
          switch (weatherType) {
            case "Clouds":
              document.body.style.backgroundImage = `url('${clouds}')`;
              break;
            case "Haze":
              document.body.style.backgroundImage = `url('${haze}')`;
              break;
            case "Clear":
              document.body.style.backgroundImage = `url('${sunny}')`;
              break;
            case "Mist":
              document.body.style.backgroundImage = `url('${mist}')`;
              break;
            case "Rain":
              document.body.style.backgroundImage = `url('${rain}')`;
              break;
    
            default:
              document.body.style.backgroundImage = `url('${sunny}')`;
              break;
          }
        }
      }, [weatherType]);

      useEffect(() => {
        if (weatherType) {
          switch (weatherType) {
            case "Clouds":
              setWeatherState("wi-day-cloudy");
              break;
            case "Haze":
              setWeatherState("wi-fog");
              break;
            case "Clear":
              setWeatherState("wi-day-sunny");
              break;
            case "Mist":
              setWeatherState("wi-dust");
              break;
            case "Rain":
              setWeatherState("wi-day-rain");
              break;
    
            default:
              setWeatherState("wi-day-sunny");
              break;
          }
        }
      }, [weatherType]);
      
  let sec = sunset;
  let date = new Date(sec * 1000);
  let newstr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
    <article className='widget'>
        <div className="weatherIcon">
        <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
            <div className="temperature">
                <span>{temp}&deg;</span>
            </div>
            <div className="description">
                <div className="weatherCondition">{weatherType}</div>
                <div className="place">{name},{country}</div>
            </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
<div className="extra-temp">
<div className="temp-info-minmax">
<div className="two-sided-section">
    <p>  <i className={"wi wi-sunset"}></i>   </p>
    <p className="extra-info-leftside"> {newstr}<br /> Sunset
    </p>
</div>
<div className="two-sided-section">
    <p>  <i className={"wi wi-humidity"}></i>   </p>
    <p className="extra-info-leftside"> {humidity} <br /> Humidity
    </p>
</div></div>
<div className="temp-info-minmax">
<div className="two-sided-section">
    <p>  <i className={"wi wi-rain"}></i>   </p>
    <p className="extra-info-leftside"> {pressure} <br /> Pressure
    </p>
</div>
<div className="two-sided-section">
    <p>  <i className={"wi wi-strong-wind"}></i>   </p>
    <p className="extra-info-leftside"> {speed} <br /> Speed
    </p>
</div></div>
</div>
    </article>
    
    
    
    
    
    
    </>
  )
}

export default WeatherDetails