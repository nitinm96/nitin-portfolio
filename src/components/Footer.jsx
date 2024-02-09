import {SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "@icons-pack/react-simple-icons";
import { Instagram } from "@mui/icons-material";
import React from "react";
import MediaQuery from "react-responsive";

function Footer(){
    const year = new Date().getFullYear();

    return (
        <div className="relative bg-[#303030]">
            <MediaQuery minWidth={700}>                
                <div className="flex flex-col items-center justify-center w-full ">
                    <div className="flex flex-col items-center justify-center w-full space-y-3 m-5">
                        <div className="text-white text-2xl">
                            CONNECT WITH ME
                        </div>
                        <div className="flex items-center justify-center space-x-10">
                            <SiInstagram color="#0478FF" size={45}/>
                            <SiTwitter color="#0478FF" size={45}/>
                            <SiGithub color="#0478FF" size={45}/>                            
                            <SiLinkedin color="#0478FF" size={45}/>
                        </div>                        
                    </div>
                    <div>
                        <p className=" text-white text-sm ">
                            &copy; {year} | DESIGNED AND DEVELOPED BY <span className="text-[#0478FF] font-bold">NITIN MINHAS.</span>
                        </p>                       
                    </div>
                </div>                
            </MediaQuery>
        </div>
    )
}
export default Footer