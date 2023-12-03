import React, { useEffect, useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Accordion from "react-bootstrap/Accordion";
import "./SingleProductCard.css";

import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SwapHorizontalCircleOutlinedIcon from "@mui/icons-material/SwapHorizontalCircleOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useBaseApi } from "../../../contextApi/BaseDomainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductInfo = ({ productDetails }) => {
  // console.log(productDetails);

  const baseURL = useBaseApi();
  const navigate = useNavigate();
  const [wishlisted, setWishlisted] = useState(false);
  // const {fetchingWishlistProducts} = wishlistProductsContext();

  const [wishlistItems, setWishlistItems] = useState(null);
  const accessToken = localStorage.getItem("accessToken");
  const images = [
    {
      original: productDetails?.displayImage,
      thumbnail: productDetails?.displayImage,
    },
  ];

  productDetails?.images?.forEach((img) => {
    images.push({
      original: img,
      thumbnail: img,
    });
  });

  const colorShades = [
    { color: "#0E0E0E", colorName: "Jet Black" },
    { color: "#141C30", colorName: "navy blazer" },
    { color: "maroon", colorName: "bold red" },
    { color: "#1567D9", colorName: "blue" },
    { color: "yellow", colorName: "yellow" },
    { color: "orange", colorName: "orange" },
    { color: "gray", colorName: "gray" },
  ];

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

      // console.log(response.data.data.items);
      setWishlistItems(response.data.data.items);
    } catch (e) {}
  };

  useEffect(() => {
    fetchingWishlistProducts();
  }, [wishlisted]);
  console.log(wishlistItems);
  // fetchingWishlistProducts();
  const handleAddItemToCart = async () => {
    try {
      if (accessToken === null) {
        navigate("/login");
      } else {
        const response = await axios.patch(
          `https://academics.newtonschool.co/api/v1/ecommerce/cart/${productDetails._id}`,
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
      }
    } catch (e) {
      console.log("error while adding to cart", e);
    }
  };

  const handleAddToWishlist = async () => {
    try {
      if (accessToken === null) {
        navigate("/login");
      } else {
        const response = await axios.patch(
          `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/`,
          // '{\n    "quantity" : 1 ,\n    "size" : "S"\n}',
          {
            productId: productDetails._id,
          },
          {
            headers: {
              projectId: "4stjj1sb1x5a",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjFmNjBhMWQ4NzkyNjJkMmYzYjFlNyIsImlhdCI6MTcwMTUzNjAxMywiZXhwIjoxNzMzMDcyMDEzfQ.z5QUj3-xDAISsrGF5c02BVpH07mElJz85OBHuOumYks",
            },
          }
        );

        // console.log("response", response);
        alert(response.data.message);
        if (response.status === 200) {
          setWishlisted(true);
        }
      }
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const handleRemoveFromWishlist = async () => {
    const response = await axios.delete(
      `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${productDetails._id}`,
      {
        headers: {
          projectId: "4stjj1sb1x5a",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjFmNjBhMWQ4NzkyNjJkMmYzYjFlNyIsImlhdCI6MTcwMTUzNjAxMywiZXhwIjoxNzMzMDcyMDEzfQ.z5QUj3-xDAISsrGF5c02BVpH07mElJz85OBHuOumYks",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )

    // console.log(response);

    if(response.status === 200)
    {
      setWishlisted(false);
    }
  };
  return (
    <div className="productinfo-wrapper">
      <Row>
        <Col md={6} sm={12} className="product-gallery">
          <div>
            <ImageGallery
              items={images}
              thumbnailPosition="left"
              useBrowserFullscreen={false}
              showPlayButton={false}
              slideOnThumbnailOver={true}
              showFullscreenButton={false}
            />
          </div>
        </Col>
        <Col md={5} sm={12} className="details-wrapper">
          <div className="details-container">
            <h3 className="brand-name">{productDetails?.brand}</h3>
            <h3 className="product-name">{productDetails?.name}</h3>
            <div className="ratings">&#11088;{productDetails?.ratings}</div>
            <div className="price-section">
              <div className="selling-price">
                <span>₹</span>
                <h3>{productDetails?.price}</h3>
              </div>
              <p className="actual-price">₹1299</p>
              <h4 className="offer-percentage">65% OFF</h4>
            </div>
            <div className="inclusive-tax-text">inclusive of all taxes</div>
            <div className="tags">
              <p className="tag-offer">BUY 3 FOR 999</p>
              <p className="tag-fabric">100% COTTON</p>
            </div>
            <div className="tribe-text">
              TriBe members get an extra discount of ₹30 and FREE shipping.
            </div>
            <div className="colour-options-text">
              <h5>COLOUR OPTIONS:</h5>&nbsp;&nbsp;&nbsp;
              <span>{productDetails?.color}</span>
            </div>
            <div className="colour-container">
              {colorShades.map((box, i) => {
                return (
                  <div className="multi-color-block" key={i}>
                    <div style={{ backgroundColor: `${box?.color}` }}></div>
                  </div>
                );
              })}
            </div>
            <div>
              <h2 className="select-size-title">Select Size</h2>
            </div>
            <div className="size-container">
              {productDetails?.size?.map((item, i) => {
                return (
                  <div key={i} className="size-item">
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="button-wrapper">
              <Button className="add-to-bag">
                <LocalMallOutlinedIcon className="bag-icon" />
                <span onClick={handleAddItemToCart}>ADD TO BAG</span>
              </Button>
              <Button className="add-to-wishlist">
                {/* checking if the product already exist in the wishlist */}

                {wishlisted ||
                wishlistItems
                  ?.map((item) => item.products?._id)
                  .includes(productDetails?._id) ? (
                  <div>
                    <FavoriteIcon className="filled-heart-icon" />
                    <span onClick={handleRemoveFromWishlist}>WISHLISTED</span>
                  </div>
                ) : (
                  <div>
                    <FavoriteBorderOutlinedIcon className="heart-icon" />
                    <span onClick={handleAddToWishlist}>WISHLIST</span>
                  </div>
                )}
              </Button>
            </div>
            <div className="accordion-container">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="accordion-title">
                    <StarOutlineIcon className="accordion-icon" />
                    <div className="accordion-subtitle">
                      <p>Offers</p>
                      <p>SAVE EXTRA WITH 0 OFFERS</p>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="accordion-title">
                    <ArticleOutlinedIcon className="accordion-icon" />
                    <div className="accordion-subtitle">
                      <p>Product Description</p>
                      <p>Manufacture, Care and Fit</p>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-body">
                    {productDetails?.description}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="accordion-title">
                    <SwapHorizontalCircleOutlinedIcon className="accordion-icon" />
                    <div className="accordion-subtitle">
                      <p>15 Days Returns & Exchange</p>
                      <p>Know about return & exchange policy</p>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="accordion-body">
                    Easy returns upto 15 days of delivery. Exchange available on
                    select pincodes
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="trustbadge-container">
              <div>
                <Image
                  src="https://images.bewakoof.com/web/trust-cart.svg"
                  className="trustbadge-img"
                  fluid
                  loading="lazy"
                  alt="offer"
                />
                <p className="trustbadge-title">100% SECURE PAYMENTS</p>
              </div>
              <div>
                <Image
                  src="https://images.bewakoof.com/web/Easy-Returns.svg"
                  className="trustbadge-img"
                  fluid
                  loading="lazy"
                  alt="offer"
                />
                <p className="trustbadge-title">
                  EASY RETURNS & INSTANT REFUNDS
                </p>
              </div>
              <div>
                <Image
                  src="https://images.bewakoof.com/web/Globe.svg"
                  className="trustbadge-img"
                  fluid
                  loading="lazy"
                  alt="offer"
                />
                <p className="trustbadge-title">SHIPPING GLOBALLY</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductInfo;
