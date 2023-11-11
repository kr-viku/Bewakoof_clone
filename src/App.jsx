import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Routers from "./routes/Routers";
import Main from "./components/main/Main";

const App = () => {
  return (
    <div id="app">
      <Header />
      <Main/>
    </div>
  );
};

export default App;
