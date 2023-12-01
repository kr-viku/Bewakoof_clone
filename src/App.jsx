import React, { useState } from "react";
import Header from "./components/header/Header";
import "./App.css";
import BaseDomainContext from "./components/contextApi/BaseDomainContext";
import Footer from "./components/footer/Footer";
import Routers from "./routes/Routers";
import ProductsContext, { productsContext } from "./components/contextApi/ProductsContext";

const App = () => {
  const [isSearching, setIsSearching]= useState(false);
  
  return (
    <BaseDomainContext>
    <ProductsContext>
      <div id="app" className="app-wrapper">
        <Header isSearching={isSearching} setIsSearching= {setIsSearching}/>
        <Routers isSearching={isSearching} setIsSearching= {setIsSearching}/>
        {/* <Footer/> */}
      </div>
      </ProductsContext>
    </BaseDomainContext>
  );
};

export default App;
