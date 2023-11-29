import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Accordion from "react-bootstrap/Accordion";
import "./SingleProductCard.css";

import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

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

  const colorShades = [
    { color: "#0E0E0E", colorName: "Jet Black" },
    { color: "#141C30", colorName: "navy blazer" },
    { color: "maroon", colorName: "bold red" },
    { color: "#1567D9", colorName: "blue" },
    { color: "yellow", colorName: "yellow" },
    { color: "orange", colorName: "orange" },
    { color: "gray", colorName: "gray" },
  ];
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
          <div>
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
            <div className="inclusive-tax-text">inclusive of all taxes
            </div>
            <div className="tags">
              <p className="tag-offer">BUY 3 FOR 999</p>
              <p className="tag-fabric">100% COTTON</p>
            </div>
            <div className="tribe-text">
              TriBe members get an extra discount of ₹30 and FREE shipping.
            </div>
            <div>
              <h3>COLOUR OPTIONS: {productDetails?.color}</h3>
            </div>
            <div>
              {colorShades.map((box, i) => {
                return (
                  <div className="multi-color-block" key={i}>
                    <div style={{ backgroundColor: `${box?.color}` }}></div>
                  </div>
                );
              })}
            </div>
            <div>
              {productDetails?.size.map((item, i) => {
                return <div id={i}>{item}</div>;
              })}
            </div>
            <div>
              <Button>
                <LocalMallOutlinedIcon />
                <span>ADD TO BAG</span>
              </Button>
              <Button>
                <FavoriteBorderOutlinedIcon />
                <span>WISHLIST</span>
              </Button>
            </div>
            <div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductInfo;
