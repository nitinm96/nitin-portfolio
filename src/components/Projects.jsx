import { SiGithub } from "@icons-pack/react-simple-icons";
import React, { useState } from "react";
import "../App.css";
import snapchatBg from "../assets/snapchat-bg.png";
import closetAppImg from "../assets/closet-app-bg.png";
import closetAppImgLandscape from "../assets/closet-app-landscape.png";
import snapchatBgLandscape from "../assets/snapchat-landscape.png";
import lvmLogoLong from "../assets/lvm-bg.png";
import lvmLandscape from "../assets/lvm-landscape.png";
import articleLogoLandscape from "../assets/articlesLogoLandscape.png";
import articleLogo from "../assets/articlesLogo.png";
function Projects() {
  const projectData = [
    {
      title: "LVM Counselling",
      description: "LVM Counselling is a website for a psychotherapist that provides counseling services to individuals dealing with various mental health issues.",
      img: lvmLogoLong,
      imgLandscape: lvmLandscape,
      alt: "lvm_counselling_image",
      github: "https://github.com/nitinm96/LVM-Counselling",
    },    
    {
      title: "News Article Application",
      description: "News Article Application provides users with real time news articles and allowing users to favorite and view articles with a clean responsive layout.",
      img: articleLogo,
      imgLandscape: articleLogoLandscape,
      alt: "news_article_image",
      github: "https://github.com/nitinm96/news-article",
    },
    {
      title: "Closet Application",
      description:
        "Closet Application provides the tools and features you need to organize, categorize, and optimize your virtual clothing closet.",
      img: closetAppImg,
      imgLandscape: closetAppImgLandscape,
      alt: "closet_app_image",
      github: "https://github.com/nitinm96/Closet_Application",
    },
    {
      title: "Snapchat Clone",
      description:
        "Snapchat clone is a web-based application that replicates the core functionality of Snapchat, a popular multimedia messaging app.",
      img: snapchatBg,
      imgLandscape: snapchatBgLandscape,
      alt: "snapchat_app_image",
      github: "https://github.com/nitinm96/snapchat_clone",
    }
  ];

  const [hoverStates, setHoverStates] = useState(
    Array(projectData.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const updatedHoverStates = [...hoverStates];
    updatedHoverStates[index] = true;
    setHoverStates(updatedHoverStates);
  };

  const handleMouseLeave = (index) => {
    const updatedHoverStates = [...hoverStates];
    updatedHoverStates[index] = false;
    setHoverStates(updatedHoverStates);
  };

  return (
    <div
      name="Projects"
      id="hideScrollBar"
      className="relative overflow-y-scroll"
    >
        <div className="flex flex-col items-center justify-center ">
          <div className="text-4xl text-[#0478FF] m-8 font-bold ">
            Projects
          </div>

          {/* project card template */}
          <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-y-5">
            {projectData.map((projects, index) => {
              return (
                <div
                  key={index}
                  className="relative flex items-center justify-center bg-slate-200/30 shadow-xl rounded-3xl space-x-9 p-3 mx-16 my-4 hover:scale-110 duration-300"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {/* PROJECT CARD COVER START */}
                  <img
                    src={projects.imgLandscape}
                    alt={projects.alt}
                    className={
                      hoverStates[index]
                        ? "absolute top-0 right-0 bottom-0 left-0 m-auto w-1/6 h-0 opacity-0 object-cover rounded-3xl duration-300"
                        : "absolute top-0 right-0 bottom-0 left-0 m-auto w-full h-full opacity-100 object-cover rounded-3xl duration-300"
                    }
                  />
                  {/* PROJECT CARD COVER END */}

                  <div>
                    <img
                      className="rounded-lg m-4"
                      src={projects.img}
                      width={250}
                      alt={projects.alt}
                    />
                  </div>
                  <div className="flex flex-col items-start w-full h-full justify-center space-y-8">
                    <div className="text-2xl font-bold text-[#0478FF]">
                      {projects.title}
                    </div>
                    <div className="">{projects.description}</div>
                    <a
                      className="flex items-center bg-[#303030] hover:bg-[#0478FF] duration-200 p-2 rounded-full w-36 "
                      href={projects.github}
                      target="_blank"
                    >
                      <SiGithub color="white" />
                      <span className="text-white text-sm px-2">
                        Github Repo
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  );
}

export default Projects;
