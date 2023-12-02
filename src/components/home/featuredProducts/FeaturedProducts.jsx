import React from "react";
import { Container } from "react-bootstrap";
import "./FeaturedProducts.css";

const featuredProducts = {
  "New Arrivals": "./src/assets/images/newarrivals.png",
  Bestsellers: "./src/assets/images/bestsellers.png",
  Winterwear: "./src/assets/images/winterwear.png",
  "Official Collaborations": "./src/assets/images/officialcollaborations.png",
  Customization: "./src/assets/images/customization.png",
  Combos: "./src/assets/images/combos.gif",
  "Coupon Offers": "./src/assets/images/couponoffers.png",
  "Vote for Designs": "./src/assets/images/vote.png",
  "Plus Size": "./src/assets/images/plussize.png",
  "Last Sizes Left": "./src/assets/images/lastsizeleft.png",
};

//   const featuredProducts = [
//     {'New Arrivals': './src/assets/images/newarrivals.png'},
//     {'Bestsellers': './src/assets/images/bestsellers.png'},
//     {'Winterwear': './src/assets/images/winterwear.png'},
//     {'Official Collaborations': './src/assets/images/officialcollaborations.png'},
//     {'Customization': './src/assets/images/customization.png'},
//     {'Combos': './src/assets/images/combos.gif'},
//     {'Coupon Offers': './src/assets/images/couponoffers.png'},
//     {'Vote for Designs': './src/assets/images/vote.png'},
//     {'Plus Size': './src/assets/images/plussize.png'},
//     {'Last Sizes Left': './src/assets/images/lastsizeleft.png'}
// ]

const FeaturedProducts = () => {
  return (
    <div className="features-wrapper">
      <div className="features-container">
        <ul className="features-list">
          {Object.entries(featuredProducts).map(([key, value]) => (
            <li className="featured-product" key={key}>
              <div className="slider-inner">
                <img src={value} alt={key} className="slider-image" />
                <p>{key}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturedProducts;
