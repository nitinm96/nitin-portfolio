import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiX,
} from "@icons-pack/react-simple-icons";
import { Instagram } from "@mui/icons-material";
import React from "react";
import MediaQuery from "react-responsive";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="relative">
      <MediaQuery minWidth={700}>
        <div className="flex flex-col items-center justify-center w-full pb-2 bg-[#303030] ">
          <div className="flex flex-col items-center justify-center w-full space-y-3 m-5">
            <div className="text-white text-2xl">CONNECT WITH ME</div>
            <div className="flex items-center justify-center space-x-10">
              <a
                className="cursor-pointer hover:-translate-y-3 transition-all duration-500 ease-out"
                href="https://www.instagram.com/nitinm96/"
                target="_blank"
              >
                <SiInstagram color="#0478FF" size={45} />
              </a>
              <a
                className="cursor-pointer hover:-translate-y-3 transition-all duration-500 ease-out"
                href="https://x.com/Nitin_Minhas"
                target="_blank"
              >
                <SiX color="#0478FF" size={45} />
              </a>
              <a
                className="cursor-pointer hover:-translate-y-3 transition-all duration-500 ease-out"
                href="https://github.com/nitinm96"
                target="_blank"
              >
                <SiGithub color="#0478FF" size={45} />
              </a>
              <a
                className="cursor-pointer hover:-translate-y-3 transition-all duration-500 ease-out"
                href="https://www.linkedin.com/in/nitin-minhas/"
                target="_blank"
              >
                <SiLinkedin color="#0478FF" size={45} />
              </a>
            </div>
          </div>
          <div>
            <p className=" text-white text-sm">
              &copy; {year} | DESIGNED AND DEVELOPED BY
              <span className="text-[#0478FF] font-bold"> NITIN MINHAS.</span>
            </p>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}
export default Footer;
