import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

import Skill from "./components/Skill";
import Projects from "./components/Projects";
import ContactInfo from "./components/ContactInfo"; // Import the new component
import CloudTasksCard from "./components/CloudTasksCard";
import Foter from "./Components/Foter";

function App() {
  return (
    
    
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen text-gray-300">
        <Navbar />
       
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-info" element={<ContactInfo />} /> {/* Add route for ContactInfo */}
        </Routes>
         </Router>
          <About/>
          <Projects/>
          <CloudTasksCard/>
          <Skill/>
          <Contact/>
        <Foter/>
      </div>
   
  );
}

export default App;
