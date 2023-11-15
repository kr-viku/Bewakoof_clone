import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavBar.css";
import SideBar from "../sideBar/SideBar";
import { useBaseApi } from "../../contextApi/BaseDomainContext";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState(null);

  const baseApi = useBaseApi();

  function handleSearch(e) {
    const value = e.target.value;
    setSearchTerm(value);
  }

  async function fetchingProducts() {
    try {
      const res = await axios.get(
        `${baseApi}api/v1/ecommerce/clothes/products?search={"title":${searchTerm}}`
      );
      console.log(res);
    } catch (e) {
      console.log("error");
    }
  }
  useEffect(() => {
    fetchingProducts();
  }, [searchTerm]);
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
      <div className="navbar-search-section">
        <SearchIcon className="search-icon" />
        <input
          placeholder="Search by product, category or collection"
          className="search-box"
          onChange={handleSearch}
        />
      </div>
      <div className="navbar-login-fav-cart-country">
        <Link to="/Login" className="item">
          Login
        </Link>
        <Link to="/favourites" className="item">
          <FavoriteBorderIcon />
        </Link>
        <Link to="/cart" className="item">
          <ShoppingBagOutlinedIcon />
        </Link>
      </div>
      {showMenu && <SideBar handleMenuBarClick={handleMenuBarClick} />}
    </div>
  );
};

export default NavBar;

