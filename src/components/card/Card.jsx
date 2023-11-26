import React from 'react'
import './Card.css'
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Card = ({product}) => {
    console.log(product);

    const navigate= useNavigate();
    const handleImageClick=()=>{
         navigate(`/product/${product._id}`)
    }
    console.log(product);
  return (
    <div className='card-container'>
        <div className='product-card-img'>
       <Image
        src={product.displayImage}
        title={product.name}
        fluid
        onClick={handleImageClick}
        />
       </div>
       <div className="product-card-detail">
        <div className="product-naming">
            <h6 className="brand-name">{product.brand}</h6>
            <p className="name">{product.name}</p>
        </div>

        <div className="d-flex product-price-box px-1">
            <div className="discounted-price-text">
                <span>₹</span>
                {product.price}
            </div>
            <div className="actual-price-text">
                <span>₹</span>
                3456
            </div>
            <div className="discount-percent">65% OFF</div>
        </div>
        </div>
    </div>
  )
}

export default Card