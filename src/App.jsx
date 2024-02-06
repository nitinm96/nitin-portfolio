import React from "react";
import './App.css'
import NavgationMenu from './components/NavigationMenu.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import ToTopButton from "./components/ScrollToTop.jsx";
import Projects from "./components/Projects.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  const about1 = "As an aspiring front-end developer, I am poised to embark on my journey in the dynamic tech industry, equipped with a solid foundation acquired through education and self-learning."
  const about2 = "With a passion for collaborative work, I am excited about the prospect of contributing to and learning from diverse teams, leveraging collective expertise to achieve innovative solutions."
  const homePgMsg = "Ready to turn theory into practice, transform challenges into opportunities, and embark on a journey of continuous learning in the tech world."
  
  return (
    <>
      <NavgationMenu />
      <ToTopButton />
      <Home HomeMsg={homePgMsg} />       
      <About About1={about1} About2={about2} />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  )
}
// For navigating to different pages: https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/
// Icons https://github.com/icons-pack/react-simple-icons
// Icons Weather: https://openweathermap.org/weather-conditions#Icon-list
// Weather API: https://openweathermap.org/weather-conditions
export default App
