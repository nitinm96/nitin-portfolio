import { SiGithub } from "@icons-pack/react-simple-icons";
import React from "react";
import MediaQuery from "react-responsive";
import '../App.css'
import img from '../assets/profile-pic-long.png'


function Projects() {

    const projectData= [
         {
            title: "Closet Application",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: img,
            github: "https://github.com/nitinm96/Closet_Application"

         },
         {
            title: "Snapchat Clone",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: img,
            github: "https://github.com/nitinm96/snapchat_clone"
         },
         {
            title: "Snapchat Clone",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: img,
            github: "https://github.com/nitinm96/snapchat_clone"
         },
         {
            title: "Snapchat Clone",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            img: img,
            github: "https://github.com/nitinm96/snapchat_clone"
         }
         
        ]
    return (
        
        <div name="Projects" id ="hideScrollBar"className="relative w-full h-screen overflow-y-scroll">        
            <MediaQuery minWidth={700}>
            <div className="flex flex-col items-center justify-center w-full ">
                <div className="text-4xl text-[#0478FF] m-10 font-bold ">
                    Projects
                </div>
                <div className="w-3/4">
                    {/* <div  className="flex items-center justify-center">
                        <div className=" border-[#0478FF] border-4 bg-[#0478FF] p-2 rounded-lg m-10">
                            <img src={projectData[0].img} width={400} alt={`${projectData[0].title}_image`} />
                        </div>
                        <div className="space-y-10">
                            <div className="text-3xl text-[#0478FF]">{projectData[0].title}</div>
                                <p className="">{projectData[0].description}</p>
                             <a className="flex bg-[#303030] p-2 rounded-full w-40" href={projectData[0].github} target="_blank">                                    
                                <SiGithub color="white"/> 
                                <span className="text-white px-2">Github Repo</span>
                            </a> 
                        </div>
                    </div> */}
                    {
                        projectData.map((projects,index) => {
                            return (
                                <div key={index} className="flex items-center justify-center">                                
                                    
                                    <div className=" border-[#0478FF] border-4 bg-[#0478FF] p-2 rounded-lg m-10">
                                        <img src={projects.img} width={250} alt={`${projects.title}_image`} />
                                    </div>
                                    <div className="space-y-10">
                                        <div className="text-3xl text-[#0478FF]">{projects.title}</div>
                                        <p className="w-2/4">{projects.description}</p>
                                        <a className="flex bg-[#303030] p-2 rounded-full w-40" href={projects.github} target="_blank">                                    
                                                    <SiGithub color="white"/> 
                                                    <span className="text-white px-2">Github Repo</span>
                                        </a> 
                                    </div>
                                </div>
                            )
                        
                        })
                    }
                </div>
            </div>
            </MediaQuery>
        </div>
    )
}

export default Projects