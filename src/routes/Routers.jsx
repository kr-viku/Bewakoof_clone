import React from "react";
import { Route, Routes } from "react-router-dom";
import Men from "../components/pages/Men";
import Women from "../components/pages/Women";
import MobileCover from "../components/pages/MobileCover";
import Home from "../components/home/Home";

const Routers = ({isSearching, setIsSearching}) => {
  return (
    <Routes>
      <Route path="/" element={<Home isSearching={isSearching} setIsSearching= {setIsSearching} />} />
      <Route path="/Men" element={<Men />} />
      <Route path="/Women" element={<Women />} />
      <Route path="/MobileCovers" element={<MobileCover />} />
    </Routes>
  );
};

export default Routers;
