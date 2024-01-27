import React from "react";
import { SiGithub, SiGithubcopilot, SiReact, SiWelcometothejungle } from '@icons-pack/react-simple-icons';
import profilePic from '../../assets/profile-pic.jpeg'


function HomeWeb(){
    return(
        <>
            <div>
                <img src={profilePic} width={250} className='rounded-full' />
            </div>
        </>
        
    )
}
export default HomeWeb