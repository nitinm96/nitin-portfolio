import { LocationOnOutlined } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MediaQuery from 'react-responsive'


function WeatherWeb() {

    const [weatherData, setWeatherData] = useState(null);
    const [locationData, setLocationData] = useState(null);
    const [longitude, setLongitude] = useState();
    const [latitude, setLatitude] = useState();
    const apiKeyOpenWeather = "fd2a234042a5b011864b06e335b8673f"
    const apiKeyOpenCage = "4ed66cbef5ff4b679bd021334fcb3842"
    const locationInfo = locationData && locationData.components;
    const locationString = locationInfo ? locationInfo.city ? `${locationInfo.city}, ${locationInfo.state_code}` : `${locationInfo.state}, ${locationInfo.state_code}` : '';
    const [allowLocation, setAllowLocation] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//         try {
//         // Fetch geolocation data
//         const position = await new Promise((resolve, reject) => {
//           navigator.geolocation.getCurrentPosition(resolve, reject);
//         });

//         const roundedLatitude = Math.round(position.coords.latitude * 100) / 100;
//         const roundedLongitude = Math.round(position.coords.longitude * 100) / 100;
//         // Fetch city name using OpenCage Geocoding API
        
//         const openCageResponse = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${roundedLatitude}+${roundedLongitude}&key=${apiKeyOpenCage}`);
//         setLocationData(openCageResponse.data.results[0]);

//         // Fetch weather data using the obtained latitude and longitude
//         const openWeatherResponse = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${roundedLatitude}&lon=${roundedLongitude}&exclude=alerts&units=metric&appid=${apiKeyOpenWeather}`);
//         setWeatherData(openWeatherResponse.data);
//         setAllowLocation(true);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setAllowLocation(false);
//       }
//     };

//     fetchData();
//   }, []);
 
  return (    
    
        <div className= {allowLocation ? 'opacity-100 ease-in duration-300' : 'opacity-0'}>
            <MediaQuery minWidth={1024}>
                <div className= {allowLocation ? "flex flex-col items-center justify-center w-full text-xl mx-4": 'collapse'}>                      
                    <div className='flex items-center justify-center w-full'>                 
                        10 <sup>°C</sup>
                        {/* {Math.round(weatherData && weatherData.current.feels_like) }<sup>°C</sup>  */}
                        <span className='m-1'>
                            <img src="https://openweathermap.org/img/wn/04d@2x.png" width={50}/>        
                            {/* <img src={`https://openweathermap.org/img/wn/${weatherData && weatherData.current.weather[0].icon}@2x.png`} width={60} height={50} alt='weather-icon' /> */}
                        </span>             
                        <div>
                            Clouds                
                            {/* {weatherData && weatherData.current.weather[0].main}                                     */}
                        </div>                
                    </div>   
                    <div className='flex items-center justify-end text-sm w-full'>                                             
                        Brampton, ON
                        {/* {locationString}  */}
                        <LocationOnOutlined htmlColor='#0478FF' />                       
                    </div>                                             
                </div>  
            </MediaQuery>
            <MediaQuery maxWidth={700}>
                <div className= {allowLocation ? "flex flex-col items-end justify-end w-full": 'collapse'}>                      
                    <div className='flex items-center justify-end mr-4'>
                        <span className='m-1'>
                            <img src="https://openweathermap.org/img/wn/04d@2x.png" width={50}/>        
                            {/* <img src={`https://openweathermap.org/img/wn/${weatherData && weatherData.current.weather[0].icon}@2x.png`} width={60} height={50} alt='weather-icon' /> */}
                        </span>                   
                        10 <sup>°C</sup>
                        {/* {Math.round(weatherData && weatherData.current.feels_like) }<sup>°C</sup>                                                     */}
                    </div>   
                    <div className='flex items-center justify-center w-36'>                                             
                        Brampton, ON
                        {/* {locationString}  */}
                        <LocationOnOutlined htmlColor='#0478FF' />                       
                    </div>                                             
                </div> 
            </MediaQuery>           
        </div>              
  )
}

export default WeatherWeb

