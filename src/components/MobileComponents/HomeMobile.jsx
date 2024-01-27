import React from 'react'
import profilePic from '../../assets/profile-pic.jpeg'
import Typewriter from 'typewriter-effect';

function HomeMobile() {
  return (
    <>
      <div>
        <div className="m-20">
                <div className="text-4xl mb-6">
                    Hello, my name is                    
                </div>
                <div className="text-7xl mr-px ">
                    <div className="text-[#0478FF]">nitin
                        <span className="text-[#6EB0FE]"> minhas</span>.
                    </div>      
                    <img src={profilePic} alt="profilePicture" width={400} className="rounded-full" />
                    
                </div>
                <div className="flex text-2xl text-gray-500 bold mt-10">  
                    I'm into                                 
                     <span className="text 2xl text-[#0478FF] bold pl-1">
                        <Typewriter
                            options={{
                                strings: ['React.', 'Angular.','Javascript.','HTML.'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </div>
                <div>
                    Ready to turn theory into practice, transform challenges into opportunities, 
                    and embark on a journey of continuous learning in the tech world.
                </div>
            
            </div>
      </div>
    </>
  )
}

export default HomeMobile