import React from "react";
import Navbar from "./components/navabr/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Additem from "./pages/AddItem/Additem";
import Orders from "./pages/Orders/Orders";
import List from "./pages/List/List";

const App = () => {
  return (
    <div>
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
