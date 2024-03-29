import React, { useState } from "react";
import MediaQuery from "react-responsive";
import profilePic from "../assets/profile-pic.png";
import profilePicLong from "../assets/profile-pic-long.png";
import {
  SiAdobecreativecloud,
  SiCss3,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVisualstudiocode,
} from "@icons-pack/react-simple-icons";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
function AboutWeb({ About1, About2 }) {
  const iconNames = [
    {
      id: 1,
      name: "HTML",
      icon: <SiHtml5 color="#E34F26" size={45} />,
      website: "https://www.w3schools.com/html/",
    },
    {
      id: 2,
      name: "CSS",
      icon: <SiCss3 color="#1572B6" size={45} />,
      website: "https://www.w3schools.com/css/",
    },
    {
      id: 3,
      name: "Javascript",
      icon: <SiJavascript color="#F7DF1E" size={45} />,
      website: "https://www.javascript.com/",
    },
    {
      id: 4,
      name: "React",
      icon: <SiReact color="#61DAFB" size={45} />,
      website: "https://reactjs.org/",
    },
    {
      id: 5,
      name: "Tailwind CSS",
      icon: <SiTailwindcss color="#06B6D4" size={45} />,
      website: "https://tailwindcss.com/",
    },
    {
      id: 6,
      name: "VS Code",
      icon: <SiVisualstudiocode color="#007ACC" size={45} />,
      website: "https://code.visualstudio.com/",
    },
    {
      id: 7,
      name: "Firebase",
      icon: <SiFirebase color="#FFCA28" size={45} />,
      website: "https://firebase.google.com/",
    },
    {
      id: 8,
      name: "Figma",
      icon: <SiFigma color="#F24E1E" size={45} />,
      website: "https://www.figma.com/",
    },
    {
      id: 9,
      name: "Github",
      icon: <SiGithub color="#181717" size={45} />,
      website: "https://github.com/",
    },
    {
      id: 10,
      name: "Creative Cloud",
      icon: <SiAdobecreativecloud color="#DA1F26" size={45} />,
      website: "https://www.adobe.com/creativecloud.html",
    },
  ];

  const iconStyle =
    "cursor-pointer hover:-translate-y-3 transition-all duration-500 ease-out";

  return (
    <div name="About" className="relative">
      {/* DESKTOP VIEW START */}
      <MediaQuery minWidth={700}>
        <div className="flex items-center justify-center h-screen w-full bg-[#0478FF]">
          <div className="flex items-center justify-center mx-auto p-5 w-4/12">
            <img
              src={profilePicLong}
              width={400}
              className="rounded-xl shadow-2xl shadow-black"
              alt="proile-pic.png"
            />
          </div>
          <div className="flex flex-col items-start justify-center mx-auto w-7/12 space-y-5">
            <div className="text-white text-5xl font-bold">About Me</div>
            <div className="text-white space-y-2 text-md">
              <p>{About1}</p>
              <p>{About2}</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex items-center justify-center text-4xl text-white">
                <ChevronLeft htmlColor="white" style={{ fontSize: "4rem" }} />
                <div>Skill Set</div>
                <ChevronRight htmlColor="white" style={{ fontSize: "4rem" }} />
              </div>

              <div className="inline-flex flex-nowrap py-7 w-full bg-white/80 rounded-xl overflow-hidden">
                <div className="flex items-center justify-center max-w-none animate-infinite-scroll">
                  {iconNames.map((icon) => (
                    <div
                      className="flex items-center justify-center mx-3"
                      key={icon.id}
                    >
                      <a
                        className={iconStyle}
                        href={icon.website}
                        target="_blank"
                      >
                        <div className="text-[#0478FF] text-lg flex items-center">
                          <div>{icon.icon}</div>
                          <div className="w-36 pl-2">{icon.name}</div>
                        </div>
                      </a>
                    </div>
                  ))}
                  {iconNames.map((icon) => (
                    <div
                      className="flex items-center justify-center mx-3 "
                      key={icon.id}
                    >
                      <a
                        className={iconStyle}
                        href={icon.website}
                        target="_blank"
                      >
                        <div className="text-[#0478FF] text-lg flex items-center">
                          <div>{icon.icon}</div>
                          <div className="w-36 pl-2">{icon.name}</div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>

                {/* {[iconNames.slice(0, 5), iconNames.slice(5, 10)].map(
                  (row, rowIndex) => (
                    <div
                      className="flex flex-wrap items-center justify-around space-x-10"
                      key={rowIndex}
                    >
                      {row.map((icon) => (
                        <div
                          className="flex flex-col items-center justify-center"
                          key={icon.id}
                        >
                          <a
                            className="text-[#0478FF] text-lg flex items-center"
                            href={icon.website}
                            target="_blank"
                          >
                            <div className={iconStyle}>{icon.icon}</div>
                            <div className="pl-2">{icon.name}</div>
                          </a>
                        </div>
                      ))}
                    </div>
                  )
                )} */}
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      {/* DESKTOP VIEW END */}

      {/* MOBILE VIEW START */}
      <MediaQuery maxWidth={700}>
        <div className="flex flex-col items-center justify-center h-screen w-full bg-[#0478FF] space-y-10 ">
          <div>
            <img
              src={profilePic}
              width={200}
              className="rounded-xl shadow-lg shadow-black/55"
              alt="proile-pic.png"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-full px-5 space-y-3">
            <div className="text-white text-3xl">About Me</div>
            <div className="text-gray-200 space-y-5 text-sm">
              <p>{About1}</p>
              <p>{About2}</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full -space-y-16">
              <div className="flex items-center justify-center text-2xl text-white">
                <ChevronLeft htmlColor="black" style={{ fontSize: "2rem" }} />
                <div>Skill Set</div>
                <ChevronRight htmlColor="black" style={{ fontSize: "2rem" }} />
              </div>

              {/* <div className='flex flex-col space-y-10 bg-white/80 px-12 rounded-xl'>

                {[iconNames.slice(0, 5), iconNames.slice(5, 10)].map((row, rowIndex) => (
                  <div className='flex flex-wrap items-center justify-between space-x-5' key={rowIndex}>                    
                    {row.map((icon) => (                      
                      <div className='flex flex-col items-center justify-center' key={icon.id}>
                        <a className={iconStyle} href={icon.website} target='_blank'>
                          {icon.icon}
                        </a>
                        <a className='text-[#0478FF] text-sm' href={icon.website} target='_blank'>
                          {icon.name}
                        </a>
                      </div>
                    ))}
                  </div>
                ))}
              </div>                          */}
            </div>
          </div>
        </div>
      </MediaQuery>
      {/* MOBILE VIEW END */}
    </div>
  );
}

export default AboutWeb;
