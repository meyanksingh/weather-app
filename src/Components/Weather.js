import React from 'react'
import axios from 'axios';

import { useState } from 'react'
function Weather() {
  const API_KEY='b9eb88899f395860df447ccae422160e'
  const [city, setcity] = useState('Mumbai')
  const [weatherData, setWeatherData] = useState(null);
  const HandleOnClick=async()=>{
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
    const HandleonChange=(event)=>{
      setcity(event.target.value)
    }
  return (
    <>
    <div>
        <h1>Check the Current Weather</h1>
        <input onChange={HandleonChange} type='text' value={city} placeholder="Enter your City Name"></input>
    <button type="submit" onClick={HandleOnClick} >Submit</button>
    </div>



    {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} K</p>
          <p>Conditions: {weatherData.weather[0].description}</p>
          <p>Country: {weatherData.sys.country}</p>
        </div>
      )}
    
    
    </>
  )
}

export default Weather