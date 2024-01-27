import React from 'react'

function NavMenu() {

  return (
    <>
        <div className="flex items-center justify-between">
            <div className="cursor-pointer text-4xl font-bold m-8">Nitin Minhas</div>
            
            <ul className='flex flex-row items-center justify-center'>
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