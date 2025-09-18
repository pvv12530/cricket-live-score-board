import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "../workspace/Nav";
import T20 from "./T20";
import Odi from "./Odi";
import Test from "./Test";
import Favourite from "../workspace/Favourite";
export default function MainWorkArea() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<T20 />} />
        <Route exact path="/Odi" element={<Odi />} />
        <Route exact path="/Test" element={<Test />} />
        <Route exact path="/favourite" element={<Favourite />} />
      </Routes>
    </Router>
  );
}
