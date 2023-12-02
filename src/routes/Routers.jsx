import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../components/pages/AuthPages/login/Login";
import Signup from "../components/pages/AuthPages/signup/Signup";
import ForgetPassword from "../components/pages/AuthPages/forget-password/ForgetPassword";
import Cart from "../components/pages/privatePages/cart/Cart";
import Wishlist from "../components/pages/privatePages/wishlist/Wishlist";
import SingleProductCard from "../components/pages/publicPages/singleProductCard/SingleProductCard";
import Footer from "../components/footer/Footer";

const Routers = ({isSearching, setIsSearching}) => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home isSearching={isSearching} setIsSearching= {setIsSearching} />} />
      {/* <Route path="/Men" element={<Men />} />
      <Route path="/Women" element={<Women />} /> */}
      {/* <Route path="/MobileCovers" element={<MobileCover />} /> */}
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/ForgetPassword" element={<ForgetPassword />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/wishlist" element={<Wishlist/>} />
      <Route path="/product/:id" element={<SingleProductCard/>} />
      
    </Routes>
    </div>
  );
};

export default Routers;
