import { LocationOnOutlined } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MediaQuery from "react-responsive";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const locationInfo = locationData && locationData.components;
  const locationString = locationInfo
    ? locationInfo.city
      ? `${locationInfo.city}, ${locationInfo.state_code}`
      : `${locationInfo.state}, ${locationInfo.state_code}`
    : "";
  const [allowLocation, setAllowLocation] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch geolocation data
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const roundedLatitude =
          Math.round(position.coords.latitude * 100) / 100;
        const roundedLongitude =
          Math.round(position.coords.longitude * 100) / 100;
        // Fetch city name using OpenCage Geocoding API

        const openCageResponse = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${roundedLatitude}+${roundedLongitude}&key=${
            import.meta.env.VITE_apiKeyOpenCage
          }`
        );
        setLocationData(openCageResponse.data.results[0]);

        // Fetch weather data using the obtained latitude and longitude
        const openWeatherResponse = await axios.get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${roundedLatitude}&lon=${roundedLongitude}&exclude=alerts&units=metric&appid=${
            import.meta.env.VITE_apiKeyOpenWeather
          }`
        );
        setWeatherData(openWeatherResponse.data);
        setAllowLocation(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setAllowLocation(false);
      }
    };
    fetchData();
  }, []);

  return (
    // LIVE DATA CODE
    <div
      className={
        allowLocation ? "opacity-100 ease-in duration-300" : "opacity-0"
      }
    >
      <MediaQuery minWidth={1024}>
        <div
          className={
            allowLocation
              ? "flex flex-col items-center justify-center w-full text-xl -space-y-4"
              : "collapse"
          }
        >
          <div className="flex items-center justify-center w-full -space-x-1">
            {/* 10 <sup>°C</sup> */}
            {Math.round(weatherData && weatherData.current.feels_like)}
            <sup>°C</sup>
            <span className="m-1">
              {/* <img src="https://openweathermap.org/img/wn/04d@2x.png" width={50}/>         */}
              <img
                src={`https://openweathermap.org/img/wn/${
                  weatherData && weatherData.current.weather[0].icon
                }@2x.png`}
                width={60}
                height={50}
                alt="weather-icon"
              />
            </span>
            <div>
              {/* Clouds                 */}
              {weatherData && weatherData.current.weather[0].main}
            </div>
          </div>
          <div className="flex items-center justify-end text-sm w-full">
            {/* Brampton, ON */}
            {locationString}
            <LocationOnOutlined htmlColor="#0478FF" />
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={700}>
        <div
          className={
            allowLocation
              ? "flex flex-col items-end justify-end w-full -space-y-3"
              : "collapse"
          }
        >
          <div className="flex items-center justify-end w-full mr-2">
            <span className="">
              {/* <img src="https://openweathermap.org/img/wn/04d@2x.png" width={50}/>         */}
              <img
                src={`https://openweathermap.org/img/wn/${weatherData && weatherData.current.weather[0].icon}@2x.png`}
                width={60}
                height={50}
                alt="weather-icon"
              />
            </span>
            {/* 10 <sup>°C</sup> */}
            {Math.round(weatherData && weatherData.current.feels_like)}
            <sup>°C</sup>
            
          </div>
          <div className="flex items-center justify-end w-36 text-sm">
            {/* Brampton, ON */}
            {locationString}
            <LocationOnOutlined htmlColor="#0478FF" fontSize="medium" />
          </div>
        </div>
      </MediaQuery>
    </div>

    // HARD CODED DATA CODE

    // <div
    //   className={
    //     allowLocation ? "opacity-100 ease-in duration-300" : "opacity-0"
    //   }
    // >
    //   <MediaQuery minWidth={825}>
    //     <div
    //       className={
    //         allowLocation
    //           ? "flex flex-col items-center justify-center w-full text-xl -space-y-4"
    //           : "collapse"
    //       }
    //     >
    //       <div className="flex items-center justify-center w-full -space-x-1">
    //         10 <sup>°C</sup>
    //         {/* {Math.round(weatherData && weatherData.current.feels_like) }<sup>°C</sup>  */}
    //         <span className="m-1">
    //           <img
    //             src="https://openweathermap.org/img/wn/04d@2x.png"
    //             width={50}
    //           />
    //           {/* <img src={`https://openweathermap.org/img/wn/${weatherData && weatherData.current.weather[0].icon}@2x.png`} width={60} height={50} alt='weather-icon' /> */}
    //         </span>
    //         <div>
    //           Clouds
    //           {/* {weatherData && weatherData.current.weather[0].main}                                     */}
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-end text-sm w-full">
    //         Brampton, ON
    //         {/* {locationString}  */}
    //         <LocationOnOutlined htmlColor="#0478FF" />
    //       </div>
    //     </div>
    //   </MediaQuery>
    //   <MediaQuery maxWidth={824}>
    //     <div
    //       className={
    //         allowLocation
    //           ? "flex flex-col items-end justify-end w-full -space-y-3"
    //           : "collapse"
    //       }
    //     >
    //       <div className="flex items-center justify-end w-full mr-2">
    //         <span className="">
    //           <img
    //             src="https://openweathermap.org/img/wn/04d@2x.png"
    //             width={50}
    //           />
    //           {/* <img src={`https://openweathermap.org/img/wn/${weatherData && weatherData.current.weather[0].icon}@2x.png`} width={60} height={50} alt='weather-icon' /> */}
    //         </span>
    //         10 <sup>°C</sup>
    //         {/* {Math.round(weatherData && weatherData.current.feels_like) }<sup>°C</sup>                                                     */}
    //       </div>
    //       <div className="flex items-center justify-end w-36 text-sm">
    //         Brampton, ON
    //         {/* {locationString}  */}
    //         <LocationOnOutlined htmlColor="#0478FF" fontSize="medium" />
    //       </div>
    //     </div>
    //   </MediaQuery>
    // </div>
  );
}

export default Weather;
