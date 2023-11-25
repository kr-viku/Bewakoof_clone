import React from "react";
import { Route, Routes } from "react-router-dom";
import Men from "../components/pages/Men";
import Women from "../components/pages/Women";
import MobileCover from "../components/pages/MobileCover";
import Home from "../components/home/Home";
import Login from "../components/pages/AuthPages/login/Login";
import Signup from "../components/pages/AuthPages/signup/Signup";
import ForgetPassword from "../components/pages/AuthPages/forget-password/ForgetPassword";
import Cart from "../components/pages/privatePages/cart/Cart";
import Wishlist from "../components/pages/privatePages/wishlist/Wishlist";

const Routers = ({isSearching, setIsSearching}) => {
  return (
    <Routes>
      <Route path="/" element={<Home isSearching={isSearching} setIsSearching= {setIsSearching} />} />
      <Route path="/Men" element={<Men />} />
      <Route path="/Women" element={<Women />} />
      <Route path="/MobileCovers" element={<MobileCover />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/ForgetPassword" element={<ForgetPassword />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/wishlist" element={<Wishlist/>} />
    </Routes>
  );
};

export default Routers;
