import React, { useState } from "react";
import Header from "./components/header/Header";
import "./App.css";
import Main from "./components/main/Main";
import BaseDomainContext from "./components/contextApi/BaseDomainContext";
import Footer from "./components/footer/Footer";
import Routers from "./routes/Routers";

const App = () => {
  const [isSearching, setIsSearching]= useState(false);
  
  return (
    <BaseDomainContext>
      <div id="app">
        <Header isSearching={isSearching} setIsSearching= {setIsSearching}/>
        <Routers isSearching={isSearching} setIsSearching= {setIsSearching}/>
        <Footer/>
      </div>
    </BaseDomainContext>
  );
};

export default App;
