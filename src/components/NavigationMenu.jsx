import React, { useState } from 'react'
import { Link } from 'react-scroll';
import Weather from './Weather';
import MediaQuery from 'react-responsive';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { CloseRounded } from '@mui/icons-material';

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

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    const scrollMore = () => {
    scroll.scrollMore(-100); // Scrolling an additional 100px from the current scroll position.
  };
  return (
    <div>
        {/* DESKTOP VIEW START */}
        <MediaQuery minWidth={700}>
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
                <div className="pr-7 text-black z-10">
                        <Weather />      
                </div>    
            </div>
        </MediaQuery>
        {/* DESKTOP VIEW END */}

        {/* MOBILE VIEW START */}
        <MediaQuery maxWidth={700}>
            <div className='flex items-center justify-between fixed top-0 w-full mb-4 z-20'>
                
                {/* nav bar rectangle backround */}                             
                <div className='absolute h-24 top-0 left-0 w-full bg-white/80 backdrop-blur-md drop-shadow-md z-0'></div>         
                {/* nav bar rectangle backround */}

                {
                nav ?
                <CloseRounded htmlColor='white' fontSize='medium' onClick={handleNav} className='z-20 cursor-pointer hover:opacity-55 m-4' />
                : 
                <MenuRoundedIcon htmlColor='black' fontSize='large' onClick={handleNav} className='z-20 cursor-pointer hover:opacity-55 my-4 ml-4 mr-2 ease-in duration-150' />
                
                }

                <div className={
                nav ? 'ease-in duration-300 fixed left-0 top-0 w-full h-screen bg-black/90 backdrop-blur-md z-20'  : 
                        'absolute h-screen opacity-0'
                }>

                <ul className='flex flex-col items-center justify-center w-full h-screen text-2x text-white bold-400'>    
                        {links.map(({id, link}) => (
                            <li className="font-bold m-4">
                                <Link to={link} smooth duration={500} onClick={handleNav}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                </ul>          
                </div>
                <div className="flex items-center justify-start w-full cursor-pointer text-6xl font-bold text-[#0478FF] z-10">
                    <Link to="Home" smooth duration={500}>
                    nm
                    </Link>
                </div> 
                <div className='z-10'>
                    <Weather />      
                </div>
            </div>
        </MediaQuery>
        {/* MOBILE VIEW END */}
    </div>

    
  )
}

export default NavMenu