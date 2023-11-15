import React from 'react'
import BottomNavbar from './bottomNavbar/BottomNavbar'
import Slider from './slider/Slider'
import FeaturedProducts from './featuredProducts/FeaturedProducts'

const Home = () => {
  return (
    <div className='home-container'>
      <BottomNavbar/>
      <Slider/>
      <FeaturedProducts/>
    </div>
  )
}

export default Home