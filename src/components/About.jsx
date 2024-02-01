import React from 'react'
import MediaQuery from 'react-responsive'
import profilePic from '../assets/profile-pic.png'
import { SiAdobecreativecloud, SiCss3, SiFigma, SiGithub, SiHtml5, SiJavascript,SiReact, SiTailwindcss} from '@icons-pack/react-simple-icons'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

function AboutWeb({About1, About2}) {
  const iconNames = [{
    id: 1,
    name: "HTML",
    icon: <SiHtml5 color='#FFFFFF' size={85} />,
    website: "https://www.w3schools.com/html/",
  },
  {
     id: 2,
    name: "CSS",
    icon: <SiCss3 color='#FFFFFF' size={85} />,
    website: "https://www.w3schools.com/css/",
  },
  {
    id: 3,
    name: "Javascript",
    icon: <SiJavascript color='#FFFFFF' size={85} />,
    website: "https://www.javascript.com/",
  },
  {
    id: 4,
    name: "React",
    icon: <SiReact color='#FFFFFF' size={85} />,
    website: "https://reactjs.org/",
  },
  {
    id: 5,
    name: "Github",
    icon: <SiGithub color='#FFFFFF' size={85} />,
    website: "https://github.com/"
  },
  {
    id: 6,
    name: "Adobe Creative Cloud",
    icon: <SiAdobecreativecloud color='#FFFFFF' size={85} />,
    website: "https://www.adobe.com/creativecloud.html",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: <SiTailwindcss color='#FFFFFF' size={85} />,
    website: "https://tailwindcss.com/",
  },
  {
    id: 8,
    name: "Figma",
    icon: <SiFigma color='#FFFFFF' size={85} />,
    website: "https://www.figma.com/",
  }]

  const iconStyle = "cursor-pointer hover:-translate-y-5 transition-all duration-500 ease-out"

  return (
    <div name="About"  className='relative'>
      {/* DESKTOP VIEW START */}

      <MediaQuery minWidth={700}>
        <div className="flex flex-col items-center justify-center py-10 h-screen w-full bg-[#0478FF]">
          <div className="flex items-start justify-start w-9/12 py-5">
            <div className=' text-white text-5xl'>
              About
            </div>
          </div>
          <div className='flex item-center justify-center'>                         
            <div className="flex items-center justify-center w-9/12 bg-white p-5 rounded-xl space-y-5 hover:scale-110 ease-in-out transition-all duration-300">
              <img src={profilePic} width={250} className="rounded-full shadow-2xl mr-6" alt="proile-pic.png"/>
                <div className='flex flex-col items-center justify-center text-balance space-y-4 '>
              <div>
                <p>
                  {About1}                  
                </p>
              </div>
              <div>
                <p>
                  {About2}                 
                </p>
              </div>   
                </div>                           
            </div>              
          </div>
         
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center text-4xl text-white py-10'>
              <ChevronLeft htmlColor='black' style={{fontSize:'4rem'}}/> 
              <div>Skill Set</div>
              <ChevronRight htmlColor='black' style={{fontSize:'4rem'}}/>
            </div>  

             <div className='flex items-center justify-between space-x-20'>
              {
                iconNames.map((icon, index) => (
                  <>
                    <div className='flex flex-col items-center'>
                      <a key={index} className={iconStyle} href={icon.website} target='_blank'>
                        {icon.icon}
                      </a>
                      <a key={index} className='py-5 text-white text-lg' href={icon.website} target='_blank'>
                        {icon.name}
                      </a>
                    </div>
                  </>
                ))
              }
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