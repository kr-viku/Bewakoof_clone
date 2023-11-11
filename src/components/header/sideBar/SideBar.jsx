import React from 'react'
import './SideBar.css';
import { Link } from 'react-router-dom';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';

const SideBar = ({handleMenuBarClick}) => {
  return (
    <div className='sidebar'>
      <CancelTwoToneIcon onClick={handleMenuBarClick} className='cross-icon'/>
      <div className='wlc-login'>
      <h3 className='wlc'>Welcome Guest</h3>
      <h4 className='login'>Login / Sign Up</h4>
      </div>
      <h4 className='title'>SHOP IN</h4>
      <div className='shop-in-links'>
        <Link to='/Men' className='link'>Men</Link>
        <Link to='/Women' className='link'>Women</Link>
        <Link to='/DesignsOfTheWeek' className='link'>Designs of the Week</Link>
        <Link to='/CustomiseYourOwnT-Shirt' className='link'>Customise your own T-Shirt</Link>
        <Link to='/MobileCovers' className='link'>Mobile Covers</Link>
      </div>
      <h4 className='title'>CONTACT US</h4>
    </div>
  )
}

export default SideBar