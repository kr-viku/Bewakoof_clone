import React from 'react';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import './TopBar.css';
const TopBar = () => {
  return (
    <div id='topBar-container'>
        <div>
       <ul className='left-items'>
         <li>Offers</li>
         <li>Fanbook</li>
         <li> Download App</li>
         <li>TriBe Membership</li>
       </ul>
       </div>
       <div>
       <ul className='right-items'>
         <li>Contact Us</li>
         <li>Track Order</li>
       </ul>
       </div>
    </div>
  )
}

export default TopBar