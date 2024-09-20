import React from "react";
import Navber from "./Components/Navber";
import Hero from "./Components/Hero";
import Service from "./Components/Service";
import Portfolio from "./Components/Portfolio";



export default function App() {
    return (
      <div className="dark:bg-custom-dark text-white relative">
        <Navber/>
        <Hero/>
        <Service/>
        <Portfolio/>
      </div>
    );
  }