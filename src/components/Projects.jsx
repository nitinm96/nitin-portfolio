import React from "react";
import MediaQuery from "react-responsive";

function Projects() {
    return (
        <div name="Projects" className="relative">        
            <MediaQuery minWidth={700}>
            <div className="flex items-center justify-center w-full h-screen">
                <div className="">
                    <div className="text-[#0478FF] font-bold text-5xl">
                        Projects
                    </div>
                </div>
            </div>
            </MediaQuery>
        </div>
    )
}

export default Projects