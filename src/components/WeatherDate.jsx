import axios from 'axios';
import React, { useEffect, useState } from 'react'
import cloudy from '../assets/WeatherIcons/cloudy.svg'
import sunny from '../assets/WeatherIcons/clear-day.svg'


function WeatherDate() {

        function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();

        // switch(month) {
        //     case 1: 
        //         month = 'January';
        //         break;
        //     case 2: 
        //         month = 'Feburary';
        //         break;
        //     case 3: 
        //         month = 'March';
        //         break;
        //     case 4: 
        //         month = 'April';
        //         break;
        //     case 5: 
        //         month = 'May';
        //         break;
        //     case 6: 
        //         month = 'June';
        //         break;
        //     case 7: 
        //         month = 'July';
        //         break;
        //     case 8: 
        //         month = 'August';
        //         break;
        //     case 9: 
        //         month = 'September';
        //         break;
        //     case 10: 
        //         month = 'October';
        //         break;
        //     case 11: 
        //         month = 'November';
        //         break;
        //     case 12: 
        //         month = 'December';     
        //         break;                    
        //}
        return `${month} / ${date} / ${year}`;       
    }

    const [weatherData, setWeatherData] = useState(null);

    // useEffect(() => {
    //     axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=43.62&lon=-79.79&exclude=alerts&units=metric&appid=fd2a234042a5b011864b06e335b8673f`)
    //     .then((response) => {
    //         setWeatherData(response);
    //         console.log(response);
    //     })
    //     .catch((error) => {
    //         console.log(error);       
    //     })
    // }, [])

  return (
    <div>
        <div className="flex items-center justify-center text-xl rounded-full">            
            <div className='mx-2'>                
                {getDate()}
            </div>
            <div className='flex items-center justify-center mx-2'>
                 <span className=''>
                    <img src={sunny} alt="cloudy.svg" width={60} height={50} />
                </span>
                -1 <sup>°C</sup>               
                {/* {Math.round(weatherData && weatherData.data.current.feels_like) }°C */}
                
            </div>                                
            <div>
                Sunny                
                {/* {weatherData && weatherData.data.current.weather[0].main} */}
            </div>
        </div>        
             
    </div>
  )
}

export default WeatherDate