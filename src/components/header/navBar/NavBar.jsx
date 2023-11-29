import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavBar.css";
import SideBar from "../sideBar/SideBar";
import { useBaseApi } from "../../contextApi/BaseDomainContext";
import SearchInput from "./SearchInput";

const NavBar = ({ isSearching, setIsSearching }) => {
  const [showMenu, setShowMenu] = useState(false);
  const accessToken = localStorage.getItem("accessToken");

  const handleMenuBarClick = () => {
    setShowMenu(!showMenu);
    // console.log('clicked');
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logoandlinks">
        <Link to="/">
          <img
            src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
            alt="logo"
            className="logo"
          />
        </Link>
        <div className="links">
          <Link to="/Men" className="item">
            MEN
          </Link>
          <Link to="/Women" className="item">
            WOMEN
          </Link>
          <Link to="/MobileCovers" className="item">
            MOBILE COVERS
          </Link>
        </div>
        {/* <NavBarRoutes/> */}
      </div>

      <div className="mobile-screen-menu">
        <MenuIcon className="menubar-icon" onClick={handleMenuBarClick} />
        <Link to="/">
          <img
            src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg"
            alt="smallscreen-logo"
          />
        </Link>
      </div>

      <div className="navbar-login-fav-cart-country">
        <SearchInput
          isSearching={isSearching}
          setIsSearching={setIsSearching}
        />
        <Link to="/Login" className="item">
          Login
        </Link>
        <Link to="/wishlist" className="item">
          <FavoriteBorderIcon />
        </Link>
        <Link to={accessToken === null ? "/login" : "/cart"} className="item">
          <ShoppingBagOutlinedIcon />
        </Link>
      </div>
      {showMenu && <SideBar handleMenuBarClick={handleMenuBarClick} />}
    </div>
  );
};

export default NavBar;
