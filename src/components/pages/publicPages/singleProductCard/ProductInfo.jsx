import React from "react";
import { Col, Row } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import "./SingleProductCard.css";


const ProductInfo = ({ productDetails }) => {
  console.log(productDetails);
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
  return (
    <div className="productinfo-wrapper">
      <Row>
        <Col md={6} sm={12}>
          <div className="product-gallery">
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
          <h3>{productDetails?.brand}</h3>
          <h3>{productDetails?.name}</h3>
          <div>{productDetails?.ratings}</div>
          <div className="price-section">
            <span>₹</span>
            <h3>{productDetails?.price}</h3>
            <p>₹999</p>
            <h4>50% OFF</h4>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductInfo;
