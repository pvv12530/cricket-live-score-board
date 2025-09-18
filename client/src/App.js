import logo from "./logo.svg";
import "./App.css";
import Home from "../src/pages/Home";
import Title from "./pages/Title";
import MainWorkArea from "./pages/workspace/MainWorkArea";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

/*global chrome*/

import { React, useEffect, useState } from "react";
import ScoreCard from "./pages/workspace/ScoreCard";
import T20 from "./pages/workspace/T20";
import Odi from "./pages/workspace/Odi";
import Test from "./pages/workspace/Test";
import Favourite from "./pages/workspace/Favourite";
import Nav from "./pages/workspace/Nav";
import Window from "./pages/workspace/Window";

function App() {
  return (
    <div>
      <div className="App">
        <div className="">
          <Router>
            <Title />
            
            <Routes>
              <Route exact path="/matchscore" element={<ScoreCard />} />
              <Route exact path="/*" element={<MainWorkArea />} />
              {/* <Route exact path="/Odi" element={<Odi />} />
              <Route exact path="/Test" element={<Test />} />
            <Route exact path="/favourite" element={<Favourite />} /> */}
            </Routes>
            {/* <MainWorkArea /> */}
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
