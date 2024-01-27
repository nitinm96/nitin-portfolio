import React from 'react'

function NavMenu() {

  return (
    <>
    
          
        <div className="flex items-center justify-between mb-4">  
            <div className='absolute h-32 top-0 left-0 w-full bg-[#0478FF]/80 z-0'></div>  
            <div className="cursor-pointer text-6xl font-bold m-8 z-10 text-white">NM</div>            
            <ul className='flex flex-row items-center justify-center text-white z-10'>
                <li className="font-bold m-8 cursor-pointer hover:opacity-55 hover:ease-in duration-150">
                    Home
                </li>
                <li className="font-bold m-8 cursor-pointer hover:opacity-55 hover:ease-in duration-150">
                    About
                </li>
                <li className="font-bold m-8 cursor-pointer hover:opacity-55 hover:ease-in duration-150">
                    Projects
                </li>
                <li className="font-bold m-8 cursor-pointer hover:opacity-55 hover:ease-in duration-150">
                    Contact Me
                </li>
                
            </ul>
        </div>    
        
    </>
    
  )
}

export default NavMenu