import React from 'react'
import AboutBanner from '../Components/AboutBanner'
import AboutDetails from '../Components/AboutDetails'
import Skill from '../Components/Skill'
import Experience from '../Components/Experience'
import Contact from "../Components/Contact"
import BasicParallax from '../Components/paara'



const About = () => {
  return (
    <div>
      <AboutBanner/>
      <AboutDetails/>
      <Skill/>
      <Experience/>
      <Contact/>
      <BasicParallax/>
    </div>
  )
}

export default About