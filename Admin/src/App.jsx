import React from "react";
import Navbar from "./components/navabr/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Additem from "./pages/AddItem/Additem";
import Orders from "./pages/Orders/Orders";
import List from "./pages/List/List";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Additem />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
