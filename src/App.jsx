import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Main from "./components/main/Main";
import BaseDomainContext from "./components/contextApi/BaseDomainContext";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <BaseDomainContext>
      <div id="app">
        <Header />
        <Main/>
        {/* <Footer/> */}
      </div>
    </BaseDomainContext>
  );
};

export default App;
