import React from "react";
import Navbar from "./components/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Placeroder from "./pages/place-order/Placeorder";
import Home from "./pages/home/home";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<Placeroder />} />
      </Routes>
    </div>
  );
};

export default App;
