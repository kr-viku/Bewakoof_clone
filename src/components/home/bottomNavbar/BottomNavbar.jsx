import React from 'react'
import { Link } from 'react-router-dom'
import './BottomNavbar.css'

const BottomNavbar = () => {
  return (
    <div className='bottom-navbar'>
        <ul className='bottom-navbar-list'>
            <li>
                <Link to='/Livenow' className='item'>LIVE NOW</Link>
            </li>
            <li>
                <Link to='/Winterwear' className='item'>WINTERWEAR</Link>
            </li>
            <li>
                <Link to='/Men' className='item'>MEN</Link>
            </li>
            <li>
                <Link to='/Women' className='item'>WOMEN</Link>
            </li>
            <li>
                <Link to='/Accessories' className='item'>ACCESSORIES</Link>
            </li>
            <li>
                <Link to='/Heavyduty' className='item'>HEAVY DUTY</Link>
            </li>
            <li>
                <Link to='/Bewakoofair' className='item'>BEWAKOOF AIR</Link>
            </li>
            <li>
                <Link to='/Officialmerch' className='item'>OFFICIAL MERCH</Link>
            </li>
            <li>
                <Link to='/Plussize' className='item'>PLUS SIZE</Link>
            </li>
        </ul>
    </div>
  )
}

export default BottomNavbar