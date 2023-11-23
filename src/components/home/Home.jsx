import React from "react";
import BottomNavbar from "./bottomNavbar/BottomNavbar";
import Slider from "./slider/Slider";
import FeaturedProducts from "./featuredProducts/FeaturedProducts";
import ProductCard from "../productcard/ProductCard";
import { productsContext } from "../contextApi/ProductsContext";
import Footer from "../footer/Footer";

const Home = ({ isSearching, setIsSearching }) => {
  const { products, setProducts } = productsContext();
  return (
    <div className="home-container">
      {!isSearching ? (
        <>
          <BottomNavbar />
          <Slider />
          <FeaturedProducts />
        </>
      ) : (
        <ProductCard products={products} />
      )}
      <Footer/>
    </div>
  );
};

export default Home;
