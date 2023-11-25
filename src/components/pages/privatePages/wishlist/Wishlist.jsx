import React from 'react'
import './Wishlist.css'
import { Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
    const navigate = useNavigate();
  const cartItems = 0;
  if (cartItems !== 0) {
    return <h2>cartItems present</h2>;
  } else {
    return (
      <div className="empty-wishlist-wrapper">
        <Image
          src="https://images.bewakoof.com/web/wishlistEmpty.svg"
          alt="empty-cart"
          fluid
          width="10%"
        />
        <div className="empty-wishlist-title">Hey! Your wishlist is empty.</div>
        <div className="empty-wishlist-subtitle">
        Save your favourites here and make them yours soon!
        </div>
        <Button type="button" onClick={() => navigate("/")}>
          Shop Now
        </Button>
      </div>
  )
  }
}

export default Wishlist