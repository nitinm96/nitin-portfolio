import React from 'react'
import WeatherDate from '../WeatherDate'


function NavMenu() {

  return (
    <>
        <div className="flex items-center justify-between fixed top-0 w-full mb-4">  
            <div className='absolute h-28 top-0 left-0 w-full bg-white/80 backdrop-blur-md drop-shadow-md z-0'></div>  
            <div className=" flex items-center justify-center cursor-pointer text-6xl font-bold m-6 z-10 text-[#0478FF]">nm                        
            </div>            
 
            <ul className='flex flex-row items-center justify-center z-10 '>
                <li className="font-bold m-12 cursor-pointer hover:opacity-55 hover:ease-in duration-150">                               
                    Home
                </li>
                <li className="font-bold m-12 cursor-pointer hover:opacity-55 hover:ease-in duration-150">
                    About
                </li>
                <li className="font-bold m-12 cursor-pointer hover:opacity-55 hover:ease-in duration-150">
                    Projects
                </li>
                <li className="font-bold m-12 cursor-pointer hover:opacity-55 hover:ease-in duration-150">
                    Contact Me
                </li>    

            </ul>
            <span className="pr-7 text-black z-10">
                    <WeatherDate />      
            </span>    
        </div>    
        
    </>
    
  )
}

export default NavMenu