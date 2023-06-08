import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
};

export default App;
