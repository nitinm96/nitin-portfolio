import axios from 'axios';
import React, { useEffect, useState } from 'react'


function WeatherDate() {

    const [weatherData, setWeatherData] = useState(null);
    const [longitude, setLongitude] = useState();
    const [latitude, setLatitude] = useState();

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         setLatitude(position.coords.latitude);
    //     }, (error) => {
    //     console.error('Error getting geolocation:', error);
    //     })
    // },[])

    // useEffect(() => {
    //     const fetchData = async () => {
    //     try {
    //         // Fetch geolocation data
    //         const position = await new Promise((resolve, reject) => {
    //         navigator.geolocation.getCurrentPosition(resolve, reject);
    //         });

    //         const roundedLatitude = Math.round(position.coords.latitude * 100) / 100;
    //         const roundedLongitude = Math.round(position.coords.longitude * 100) / 100;

    //         // Fetch weather data using the obtained latitude and longitude
    //         const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${roundedLatitude}&lon=${roundedLongitude}&exclude=alerts&units=metric&appid=fd2a234042a5b011864b06e335b8673f`)
    //         setWeatherData(response.data);
    //         console.log(response.data.current);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    //     };

    //     fetchData();
    // }, []);

  return (
    <div>
        <div className="flex items-center justify-center w-full text-xl">                      
            <div className='flex items-center justify-center'>
                 
                27 <sup>°C</sup>
                {/* {Math.round(weatherData && weatherData.current.feels_like) }<sup>°C</sup>  */}
                <span className='m-1'>
                    <img src="https://openweathermap.org/img/wn/04d@2x.png" width={60} height={50} />        
                    {/* <img src={`https://openweathermap.org/img/wn/${weatherData && weatherData.current.weather[0].icon}@2x.png`} width={60} height={50} alt='weather-icon' /> */}
                </span>             
                <div>
                    Clouds                
                    {/* {weatherData && weatherData.current.weather[0].main}                 */}
                </div>
            </div>                                    
        </div>                     
    </div>
  )
}

export default WeatherDate
