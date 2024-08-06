import React, { useState } from "react";

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
        <div className="flex flex-col items-center justify-center bg-[#0478FF]">
          <div className="text-white text-5xl font-bold m-4 md:m-8">
                About Me
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-center justify-start col-span-1">
                <img
                  src={profilePicLong}
                  width={250}
                  className="rounded-xl shadow-2xl shadow-black"
                  alt="proile-pic.png"
                />
            </div>

              <div className="flex flex-col items-center justify-center w-full col-span-2">
                <div className="text-white space-y-5 text-md m-4 text-center md:text-start">
                <p>{About1}</p>
                <p>{About2}</p>
              </div>

              <div className="flex items-center justify-center text-4xl text-white">
                  <ChevronLeft htmlColor="white" style={{ fontSize: "4rem" }} />
                  <div>Skill Set</div>
                  <ChevronRight htmlColor="white" style={{ fontSize: "4rem" }} />
              </div>

                {/* SKILL SET SLIDER COMPONENT */}
                <div className="inline-flex flex-nowrap py-7 w-full bg-white/80 rounded-xl overflow-hidden mb-10 mx-10">
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
                  </div>              
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default AboutWeb;
