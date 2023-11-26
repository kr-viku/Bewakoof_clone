import React from "react";
import "./Cart.css";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");

  // console.log(accessToken);

  if (accessToken === null) {
    return navigate("/login");
  } else {
    const cartItems = 0;
    if (cartItems !== 0) {
      return <h2>cartItems present</h2>;
    } else {
      return (
        <div className="empty-cart-wrapper">
          <Image
            src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png"
            alt="empty-cart"
            fluid
            width="15%"
          />
          <div className="empty-list-title">Nothing in the bag</div>
          <div className="empty-list-subtitle">
            Add your product here and make them yours soon!
          </div>
          <Button type="button" onClick={() => navigate("/")}>
            Shop Now
          </Button>
        </div>
      );
    }
  }
};

export default Cart;
