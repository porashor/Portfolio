import React from 'react'
import Navber from "../Components/Navber";
import Hero from "../Components/Hero";
import Service from "../Components/Service";
import Portfolio from "../Components/Portfolio";
import Testimonial from "../Components/Testimonial";
import Contact from "../Components/Contact";
import Foother from "../Components/Foother";




const Home = () => {
  return (
    <div>
      <div className="bg-custom-dark text-white">
        <Hero/>
        <Service/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  )
}

export default Home