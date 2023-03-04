import React , {useEffect, useState } from 'react';
import WeatherDetails from './WeatherDetails';
import './style.css';

function SearchMain() {
    const [searchTerm, setSearchTerm] = useState('mumbai');
    const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
     try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=2a46da0a03d806f15f60caa14b77770d`;
      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
     } catch (error) {
      console.log(error);
     }
  } 


    useEffect (() => {
      getWeatherInfo();
    },[])
  return (
    <>
    <div className='wrap'>
        <div className="search">
            <input type="search" placeholder='City name?' id='search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        
        <button className='searchButton' onClick={getWeatherInfo}>Search</button></div>
    </div>
    <WeatherDetails {...tempInfo} />
    </>
  )
}

export default SearchMain