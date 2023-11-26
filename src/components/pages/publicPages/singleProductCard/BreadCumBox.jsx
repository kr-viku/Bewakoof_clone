import React from 'react'
import { Link } from 'react-router-dom'
import './SingleProductCard.css'

const BreadCumBox = ({productDetails}) => {
    console.log(productDetails.gender );
    const tabs =[
        { text: 'Home', link: '/' },
        { text: productDetails?.gender, link: '/' },
        { text: productDetails?.name, link: '/' }
    ]
  return (
    <div className='breadcumbox-wrapper'>
       <ul>
        {tabs.map((tab, index) => (
            <li key={index}>
              <Link to={tab.link}>{tab.text}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default BreadCumBox