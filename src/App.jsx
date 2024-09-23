import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Navber from "./Components/Navber";
import Home from "./pages/Home";
import Foother from "./Components/Foother";
import About from "./pages/About";
import Blog from "./pages/Blog";


export default function App() {
    return (
      <Router>
        <Navber/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="blog" element={<Blog/>}/>
        </Routes>
        <Foother/>
      </Router>
    );
  }