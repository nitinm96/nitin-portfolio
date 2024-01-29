import React from 'react'
import WeatherDate from '../WeatherDate'
import { Link } from 'react-scroll';

function NavMenu() {
    
    const links = [
        {
            id: 1,
            link: "Home",
        },
        {
            id: 2,
            link: "About",
        },
        {
            id: 3,
            link: "Projects",
        },
        {
            id: 4,
            link: "Contact Me",
        }
    ];

  return (
    <>
        <div id="nav-container" className="flex items-center justify-between fixed top-0 w-full mb-4 z-20">                
            {/* nav bar rectangle backround */}
            <div className='absolute h-28 top-0 left-0 w-full bg-white/80 backdrop-blur-md drop-shadow-md z-0'></div>
            {/* nav bar rectangle backround */}
        
            <div className=" flex items-center justify-center cursor-pointer text-6xl font-bold m-6 z-10 text-[#0478FF]">
                <Link to='Home' smooth duration={500}>
                    nm
                </Link>                        
            </div>     
            <ul className='flex flex-row items-center justify-center z-10'>
                {links.map(({id, link}) => (
                    <li key={id} className="font-bold m-12 cursor-pointer hover:opacity-55 hover:ease-in duration-150">
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
            <span className="pr-7 text-black z-10">
                    <WeatherDate />      
            </span>    
        </div>    
        
    </>
    
  )
}

export default NavMenu