import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';

import "./Wishlist.css";


const Wishlist = () => {

  const navigate = useNavigate();

  const [wishlistItems, setWishlistItems] = useState([]);
  const[loading, setLoading] = useState(false);

  useEffect(() => {
    fetchingWishlistProducts();
  }, []);


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

 
  console.log(wishlistItems);

  const handleAddToCart = async(event)=>{
    // console.log(event.target.value);
    const id = event.target.value
    try{
      const response = await axios.patch(
        `https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,
        {
          quantity: 1,
          size: "S",
        },
        {
          headers: {
            projectId: "4stjj1sb1x5a",
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjFmNjBhMWQ4NzkyNjJkMmYzYjFlNyIsImlhdCI6MTcwMTUzNjAxMywiZXhwIjoxNzMzMDcyMDEzfQ.z5QUj3-xDAISsrGF5c02BVpH07mElJz85OBHuOumYks",
          },
        }
      );

      console.log("response", response);
      alert(response.data.message);

      if(response.status == 200)
      {
        setLoading(true);
        handleRemoveFromWishlist(id);
      }
    }
    catch(e){
      console.log(e);
    }
  }


  const handleRemoveFromWishlist = async (id) => {
    setLoading(true);
    const response = await axios.delete(
      `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`,
      {
        headers: {
          projectId: "4stjj1sb1x5a",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjFmNjBhMWQ4NzkyNjJkMmYzYjFlNyIsImlhdCI6MTcwMTUzNjAxMywiZXhwIjoxNzMzMDcyMDEzfQ.z5QUj3-xDAISsrGF5c02BVpH07mElJz85OBHuOumYks",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if(response.status === 200)
    {
      if(response?.data?.data?.items){
        setWishlistItems(response.data.data.items)
      }
      setLoading(false);
    }
  };

  if(loading){
    return <h3>Loading...</h3>
  }

  if (wishlistItems.length !== 0) {
    return (
      <div className="wishlist-wrapper">
        <div className="whishlist-container">
          {wishlistItems?.map((item, index) => {
            return (
              <div className="whishlist-item-container" key={index}>
                <CancelTwoToneIcon className="wishlist-cross-icon" onClick={() => handleRemoveFromWishlist(item.products._id)} value={item.products._id}/>
                <Image
                  src={item.products.displayImage}
                  alt={item.products.name}
                  fluid
                  className="whishlist-product-image"
                />
                <div className="whishlist-product-details">
                  <h3 className="whishlist-product-brand-name">Bewakoof®</h3>
                  <h3 className="whishlist-product-title">
                    {item.products.name}
                  </h3>
                  <div className="whishlist-product-price-container">
                    <div className="wishlist-product-selling-price-container">
                      <span className="wishlist-rs-symbol">₹</span>
                      <h3 className="wishlist-product-selling-price">
                        {item.products.price}
                      </h3>
                    </div>

                    <p className="wishlist-product-actual-price">₹1200</p>
                    <p className="wishlist-product-disc-percentage">65% OFF</p>
                  </div>
                  <Button className="wishlist-add-to-bag" onClick={handleAddToCart} value={item.products._id}>ADD TO BAG</Button>
                </div>
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
