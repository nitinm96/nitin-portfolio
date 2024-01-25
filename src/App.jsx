import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import './App.css'

function App() {

  return (
    <>    
         <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
         </Router>
    </>
  )
}
// For navigating to different pages: https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/
export default App
