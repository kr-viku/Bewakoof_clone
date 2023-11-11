import React from "react";
import NavBar from "./navBar/NavBar";
import TopBar from "./topBar/TopBar";

const Header = () => {
  return (
    <div id="header-container">
      <TopBar />
      <NavBar />
    </div>
  );
};

export default Header;
