import React from 'react'
import MediaQuery from 'react-responsive'
import profilePic from '../assets/profile-pic.png'
import { SiAdobe, SiAngular, SiCss3, SiFigma, SiFirebase, SiGithub, SiHtml5, SiJavascript, SiMacos,  SiMysql, SiReact, SiTailwindcss, SiWindows } from '@icons-pack/react-simple-icons'

function AboutWeb() {
  return (
    <div name="About"  className='relative'>
      {/* DESKTOP VIEW START */}

      <MediaQuery minWidth={700}>
        <div className="h-screen w-full bg-[#0478FF]">
          <div className="flex items-center justify-center py-10">
            <div className='text-4xl bg-white rounded-2xl py-3 px-5'>
              About
            </div>
          </div>
          <div className='flex item-center justify-center'>                         
            <div className="flex items-center justify-center w-9/12 bg-white p-5 rounded-xl space-y-5">
              <img src={profilePic} width={250} className="rounded-full shadow-2xl mr-6" alt="proile-pic.png"/>
                <div className='flex flex-col items-center justify-center space-y-4 '>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley.
                </p>
              </div>

              <div>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. 
                </p>
              </div>   
                </div>                           
            </div>              
          </div>
         
          <div className='flex flex-col items-center justify-center space-y-10 mt-20'>
            <div className=' text-4xl text-white'>
              SKILL SET
            </div>
            <div className='flex flex-col items-center justify-center space-y-10'>
              <div className='flex items-center justify-center space-x-20'>
                <SiHtml5 color='#FFFFFF' size={85} />
                <SiCss3 color='#FFFFFF' size={85} />
                <SiJavascript color='#FFFFFF' size={85} />
                <SiReact color='#FFFFFF' size={85} />
                <SiAngular color='#FFFFFF' size={85} />
                <SiAdobe color='#FFFFFF' size={85} />
                <SiTailwindcss color='#FFFFFF' size={85} />
                <SiFigma color='#FFFFFF' size={85} />
              </div> 
              {/* <div className='flex items-center justify-center space-x-20'>
                <SiFirebase color='#FFFFFF' size={85} />                
                <SiMysql color='#FFFFFF' size={85} />
                <SiGithub color='#FFFFFF' size={85} />
                <SiMacos color='#FFFFFF' size={85} />
                <SiWindows color='#FFFFFF' size={85} />
              </div>                */}
            </div>
          </div>
        </div>
      </MediaQuery>

      {/* DESKTOP VIEW END */}  

      {/* MOBILE VIEW START */}
      <MediaQuery maxWidth={700}>
        <div name="About" className="flex items-center justify-center h-screen bg-[#6EB0FE]">
          <div className='text-5xl'>
             About Page
          </div>
        </div>
      </MediaQuery>
      {/* MOBILE VIEW END */}
    </div>
      


  )
}

export default AboutWeb