import logo from "./logo.svg";
import "./App.css";
import Home from "../src/pages/Home";
import Title from "./pages/Title";
import MainWorkArea from "./pages/workspace/MainWorkArea";

import { React, useState } from "react";

function App() {
  return (
   
      <div className="App">
        <div className="">
          <Title />
          <Home />
          <MainWorkArea />
        </div>
      </div>
    
  );
}

export default App;
