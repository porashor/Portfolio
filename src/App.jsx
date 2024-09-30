import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Navber from "./Components/Navber";
import Home from "./pages/Home";
import Foother from "./Components/Foother";
import About from "./pages/About";
import Blog from "./pages/Blog";
import { ToastContainer } from "react-toastify";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Membership from "./pages/Membership";
import 'react-toastify/dist/ReactToastify.css';
import Desboard from "./Components/Desboard";
import useFunc from "./customHooks/useFunc";
import BlogDetails from "./pages/BlogDetails";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function App() {
  const {userLoged, document, signingIn, LogingIn} = useFunc()
  
    return (
      <Router>
        <Navber user={userLoged}/>
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="mem" element={<Membership/>}/>
          <Route path="desh" element={<Desboard/>}/>
          <Route path="bom" element={<BlogDetails/>}/>
        </Routes>
        <Foother/>
      </Router>
    );
  }