import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { CloseRounded } from '@mui/icons-material';
import { Link } from 'react-scroll';


function NavMenuMobile() {

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


  return (
    <>
      <div className='flex justify-between items-center fixed top-0 w-full mb-4 z-20'>

        <div className='absolute h-24 top-0 left-0 w-full bg-white/80 backdrop-blur-md drop-shadow-md z-0'></div> 

        <div className="cursor-pointer text-6xl font-bold m-4 text-[#0478FF] z-10">
          <Link to="Home" smooth duration={500}>
            nm
          </Link>
        </div>         

        {
          nav ?
          <CloseRounded htmlColor='white' fontSize='medium' onClick={handleNav} className='z-20 cursor-pointer hover:opacity-55 m-4' />
          : 
          <MenuRoundedIcon htmlColor='black' fontSize='large' onClick={handleNav} className='z-20 cursor-pointer hover:opacity-55 m-4 ease-in duration-150' />
          
        }

        <div className={
          nav ? 'ease-in duration-300 fixed left-0 top-0 w-full h-screen bg-black/90 backdrop-blur-md z-10'  : 
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
      </div>            
    </>
  )
}

export default NavMenuMobile