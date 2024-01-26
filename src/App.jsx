import React, { useState, useEffect } from "react";
import './App.css'
import HomeWeb from "./components/WebComponents/HomeWeb";
import NavMenuWeb from "./components/WebComponents/NavMenuWeb";
import NavMenuMobile from "./components/MobileComponents/NavMenuMobile";
import HomeMobile from "./components/MobileComponents/HomeMobile";

function App() {

  const [nav, setNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setNav(window.innerWidth < 778);
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      { nav ? (
    <>
      <NavMenuMobile />
      <HomeMobile />
    </>
    ) : (
      <>
        <NavMenuWeb />
        <HomeWeb />
      </>
   )}
    </>

  )
}
// For navigating to different pages: https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/
// Icons https://github.com/icons-pack/react-simple-icons
export default App
