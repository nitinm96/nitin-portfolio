import React from "react";
import './App.css'
import NavgationMenu from './components/NavigationMenu.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import ToTopButton from "./components/ToTopButton.jsx";


function App() {

  return (
    <>
      <NavgationMenu />
      <Home />       
      <About />
      <ToTopButton />
    </>
  )
}
// For navigating to different pages: https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/
// Icons https://github.com/icons-pack/react-simple-icons
// Icons Weather: https://openweathermap.org/weather-conditions#Icon-list
// Weather API: https://openweathermap.org/weather-conditions
export default App
