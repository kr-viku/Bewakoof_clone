import React, { useEffect, useState } from "react";
import "./Wishlist.css";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Wishlist = () => {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState(null);

  const fetchingWishlistProducts = async () => {
    try {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/ecommerce/wishlist",
        {
          headers: {
            projectId: "4stjj1sb1x5a",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjFmNjBhMWQ4NzkyNjJkMmYzYjFlNyIsImlhdCI6MTcwMTUzNjAxMywiZXhwIjoxNzMzMDcyMDEzfQ.z5QUj3-xDAISsrGF5c02BVpH07mElJz85OBHuOumYks",
          },
        }
      );
      setWishlistItems(response.data.data.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchingWishlistProducts();
  }, []);
  console.log(wishlistItems);

  if (wishlistItems !== null) {
    return (
      <div className="wishlist-wrapper">
        <div className="whishlist-container">
          {wishlistItems?.map((item, index) => {
            return (
              <div className="whishlist-item-container">
                <Image
                  src={item.products.displayImage}
                  alt={item.products.name}
                  fluid
                  className="whishlist-product-image"
                />
                <div className="whishlist-product-details">
                  <h3 className="whishlist-product-brand-name">Bewakoof®</h3>
                  <h3 className="whishlist-product-title">{item.products.name}</h3>

                  <p>{item.products.price}</p>
                  
                  
                  <p>₹1200</p>
                  <p>65% OFF</p>
                </div>
                <Button>ADD TO BAG</Button>
              </div>
            );
          })}
        </div>
      </div>
    );
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
    );
  }
};

export default Wishlist;
