import React from 'react'
import BottomNavbar from './bottomNavbar/BottomNavbar'
import Slider from './slider/Slider'

const Home = () => {
  return (
    <div className='home-container'>
      <BottomNavbar/>
      <Slider/>
    </div>
  )
}

export default Home