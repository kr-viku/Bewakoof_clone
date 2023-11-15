import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Routers from "./routes/Routers";
import Main from "./components/main/Main";
import BaseDomainContext from "./components/contextApi/BaseDomainContext";

const App = () => {
  return (
    <BaseDomainContext>
      <div id="app">
        <Header />
        <Main/>
      </div>
    </BaseDomainContext>
  );
};

export default App;
