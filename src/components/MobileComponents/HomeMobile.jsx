import React from 'react'
import profilePic from '../../assets/profile-pic.png'
import Typewriter from 'typewriter-effect';
import WeatherDate from '../WeatherDate';

function HomeMobile() {
  return (
    <>
        <div className="flex flex-col items-center justify-center w-full h-screen">
                <div className="mt-16 text-2xl">
                    Hello, my name is           
                    <div className="text-5xl">
                        <div className="text-[#0478FF]">nitin
                            <span className="text-[#6EB0FE]"> minhas</span>.
                        </div>                                         
                    </div>         
                </div>
                
                <div className="m-6">
                    <img src={profilePic} width={250} className="rounded-full shadow-2xl" alt="proile-pic.png"/>
                </div>
                <span className="text-black mt-2">
                    <WeatherDate />      
                </span> 
                <div className="flex items-center justify-center m-8">
                    Ready to turn theory into practice, transform challenges into opportunities, 
                    and embark on a journey of continuous learning in the tech world.
                </div>

                <div className="flex text-2xl text-gray-500 bold">  
                    I'm into                                 
                     <span className="text 2xl text-[#0478FF] bold pl-1">
                        <Typewriter
                            options={{
                                strings: ['React.','Javascript.','Designing.','HTML.','CSS.','UI/UX.'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </div>                        
            </div>

    </>
  )
}

export default HomeMobile