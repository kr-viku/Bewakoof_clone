import React from 'react'
import { Link } from 'react-router-dom'
import NavBarRoutes from './NavBarRoutes'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-logoandlinks'>
        <Link to="/">
          <img src='https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg' alt='logo' className='logo'/>
        </Link>
        <div className='links'>
        <Link to='/Men'  className='item' >MEN</Link>
        <Link to='/Women' className='item'>WOMEN</Link>
        <Link to='/MobileCovers' className='item'>MOBILE COVERS</Link>
        </div>
        {/* <NavBarRoutes/> */}
      </div>
      <div className='navbar-search-section'>
        <SearchIcon className='search-icon'/>
        <input placeholder='Search by product, category or collection' className='search-box'/>
      </div>
      <div className='navbar-login-fav-cart-country'>
        <Link to='/Login' className='item'>Login</Link>
        <Link to='/favourites' className='item'>
          <FavoriteBorderIcon/>
        </Link>
        <Link to='/cart'  className='item'>
        <ShoppingBagOutlinedIcon/>
        </Link>
      </div>
    </div>
  )
}

export default NavBar