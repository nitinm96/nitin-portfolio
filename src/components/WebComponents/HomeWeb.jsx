import React from "react";
import { SiGithub, SiGithubcopilot, SiReact, SiWelcometothejungle } from '@icons-pack/react-simple-icons';
import profilePic from '../../assets/profile-pic.png'
import Typewriter from 'typewriter-effect';

function HomeWeb(){
    return(
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="flex items-center justify-center m-8 w-2/4">
                    <img src={profilePic} width={475} className="rounded-full shadow-2xl" alt="proile-pic.png"/>
                </div>
                <div className="m-8 w-2/4">
                    <div className="text-4xl mb-4">
                        Hello, my name is               
                    </div>
                    <div className=" text-7xl mr-px ">
                        <div className="text-[#0478FF]">nitin
                            <span className="text-[#6EB0FE]"> minhas</span>.
                        </div>                                               
                    </div>

                    <div className="mt-10">
                        Ready to turn theory into practice, transform challenges into opportunities, 
                        and embark on a journey of continuous learning in the tech world.
                    </div>          

                    <div className="flex text-2xl text-gray-600 bold mt-7">  
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
                </div>                  
            </div>
        </>        
    )
}
export default HomeWeb