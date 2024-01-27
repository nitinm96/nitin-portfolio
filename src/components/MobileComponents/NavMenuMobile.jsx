import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { CloseRounded } from '@mui/icons-material';

function NavMenuMobile() {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className='flex flex-row justify-between items-center w-full'>
        <div className="cursor-pointer text-3xl font-bold m-4">Nitin Minhas</div>
        {
          nav ?
          <CloseRounded htmlColor='white' fontSize='medium' onClick={handleNav} className='z-20 cursor-pointer hover:opacity-55 m-4' />
          : 
          <MenuRoundedIcon htmlColor='black' fontSize='large' onClick={handleNav} className='z-20 cursor-pointer hover:opacity-55 m-4 ease-in duration-150' />
        }

        <div className={
          nav ? 'ease-in duration-300 fixed left-0 top-0 w-full h-screen bg-black/90 z-10'  : 
                'absolute h-screen opacity-0 z-10'
        }>
          <ul className='flex flex-col items-center justify-center w-full h-full text-2x text-white bold-400'>
            
            <li className="font-bold m-4">
              Home
            </li>
            <li className="font-bold m-4">
              About
            </li>
            <li className="font-bold m-4">
              Projects
            </li>
            <li className="font-bold m-4">
              Contact Me
            </li>
          </ul>
        </div>
      </div>            
    </>
  )
}

export default NavMenuMobile