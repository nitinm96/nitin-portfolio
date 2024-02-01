import React from "react";
import { SiGithub, SiLinkedin} from '@icons-pack/react-simple-icons';
import bitmojiPic from '../assets/me-bitmoji.png'
import Typewriter from 'typewriter-effect';
import ParticleBackground from './ParticleBackground'
import MediaQuery from "react-responsive";
import { Button } from "@mui/material";

function HomeWeb(){
    return(       
            <div name="Home" className="relative">
                {/* DESKTOP VIEW START */}
                <MediaQuery minWidth={700}>
                    <div className="absolute -z-10">
                        <ParticleBackground />
                    </div>  
                    <div className="flex items-center justify-center w-full h-screen">                                  
                        <div className="flex items-center justify-center m-8 mb-44 w-2/4">
                            <img src={bitmojiPic} width={475} className="rounded-full shadow-2xl bg-white" alt="proile-pic.png"/>
                        </div>
                        <div className="m-8 mb-44 w-2/4">
                        
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

                            <div className="flex text-2xl text-gray-600 bold my-10">  
                                I specialize in                                
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
                            <div className="flex items-center justify-start w-full space-x-5">
                                <Button variant='outlined' href="https://github.com/nitinm96" target="_blank">
                                    <SiGithub /> 
                                    <div className="px-3 text-md bold">
                                        Github
                                    </div>
                                </Button> 
                                <Button variant='outlined' href="https://www.linkedin.com/in/nitin-minhas/" target="_blank">
                                    <SiLinkedin /> 
                                    <div className="px-3 text-md bold">
                                        Linkedin
                                    </div>
                                </Button>                                                                              
                            </div>                                
                        </div>                                                    
                    </div>
                </MediaQuery>
                {/* DESKTOP VIEW END */}

                {/* MOBILE VIEW START */}
                <MediaQuery maxWidth={700}>
                    <div className="absolute -z-10">
                        <ParticleBackground />
                    </div>  
                    <div name = "Home" className="flex flex-col items-center justify-center w-full h-screen">     
                        <div className="text-2xl">                   
                            Hello, my name is                                 
                            <div className="text-5xl">
                                <div className="text-[#0478FF]">nitin
                                    <span className="text-[#6EB0FE]"> minhas</span>.
                                </div>                                         
                            </div>         
                        </div>
                        
                        <div className="m-6">
                            <img src={bitmojiPic} width={250} className="rounded-full shadow-2xl" alt="proile-pic.png"/>
                        </div>                
                        <div className="flex items-center justify-center text-center m-5">
                            Ready to turn theory into practice, transform challenges into opportunities, 
                            and embark on a journey of continuous learning in the tech world.
                        </div>

                        <div className="flex text-2xl text-gray-500 bold mb-10">  
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
                        <div className="flex items-center justify-center w-full mb-36 space-x-5">
                             <Button variant='outlined' href="https://github.com/nitinm96" target="_blank">
                                <SiGithub /> 
                                <div className="px-3 text-sm">
                                    Github
                                </div>
                             </Button> 
                            <Button variant='outlined' href="https://www.linkedin.com/in/nitin-minhas/" target="_blank">
                                <SiLinkedin /> 
                                <div className="px-3 text-sm">
                                    Linkedin
                                </div>
                            </Button>                                                                              
                        </div>                                                                            
                    </div>
                </MediaQuery>
                {/* MOBILE VIEW END */}
            </div>     
    )
}
export default HomeWeb