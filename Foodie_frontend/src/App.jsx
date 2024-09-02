import React, { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Placeroder from "./pages/place-order/Placeorder";
import Home from "./pages/home/home";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showPopup, setShowpopup] = useState(false);
  return (
    <>
      {showPopup ? <LoginPopup setShowpopup={setShowpopup} /> : <></>}
      <div className="app">
        <ToastContainer />
        <Navbar setShowpopup={setShowpopup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<Placeroder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
