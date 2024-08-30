import React from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <div className="sidebar-option">
          <img src={assets.add_icon_white} alt="add_icon_white" />
          <p>Add Item</p>
        </div>
        <div className="sidebar-option">
          <img src={assets.parcel_icon} alt="parcel_icon" />
          <p>Item List</p>
        </div>
        <div className="sidebar-option">
          <img className="orders" src={assets.order_icon} alt="order_icon" />
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
