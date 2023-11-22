import React, { useState } from "react";
import Header from "./components/header/Header";
import "./App.css";
import BaseDomainContext from "./components/contextApi/BaseDomainContext";
import Footer from "./components/footer/Footer";
import Routers from "./routes/Routers";
import ProductsContext, { productsContext } from "./components/contextApi/ProductsContext";
import ProductCard from "./components/productcard/ProductCard";
import DisplayCard from "./components/displayCard/DisplayCard";

const App = () => {
  const [isSearching, setIsSearching]= useState(false);
  
  return (
    <BaseDomainContext>
    <ProductsContext>
      <div id="app">
        <Header isSearching={isSearching} setIsSearching= {setIsSearching}/>
        <Routers isSearching={isSearching} setIsSearching= {setIsSearching}/>
        <DisplayCard/>
        <Footer/>
      </div>
      </ProductsContext>
    </BaseDomainContext>
  );
};

export default App;
