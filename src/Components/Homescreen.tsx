import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import Join from './Join/Join'
import Solutions from './Solutions/Solutions'
import Team from './Team/Team'

const Homescreen = () => {
  return (
    <div>
        <Hero />
        {/* <Solutions /> */}
      {/* <Join /> */}
      <br />
      <br />
      <br />
      <Team />
      <br />
      <br />
      <br />
        <Solutions />
        {/* <Footer /> */}
    </div>
  )
}

export default Homescreen