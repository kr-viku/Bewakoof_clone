import React from 'react'
import BottomNavbar from './bottomNavbar/BottomNavbar'
import Slider from './slider/Slider'
import FeaturedProducts from './featuredProducts/FeaturedProducts'
import ProductCard from '../productcard/ProductCard'
import { productsContext } from '../contextApi/ProductsContext'

const Home = ({isSearching, setIsSearching}) => {
  const {products, setProducts} = productsContext();
  return (
    <>
      {!isSearching ? (
        <div className='home-container'>
          <BottomNavbar/>
          <Slider/>
          <FeaturedProducts/>
          </div>
          ) : (<ProductCard products={products}/>)
      }
    
    </>
  )
}

export default Home