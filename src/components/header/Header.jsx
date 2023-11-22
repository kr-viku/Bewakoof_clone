import React from "react";
import NavBar from "./navBar/NavBar";
import TopBar from "./topBar/TopBar";

const Header = ({isSearching, setIsSearching}) => {
  return (
    <div id="header-container">
      <TopBar />
      <NavBar isSearching={isSearching} setIsSearching= {setIsSearching} />
    </div>
  );
};

export default Header;
