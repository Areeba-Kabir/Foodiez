import React from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon_white} alt="add_icon_white" />
          <p>Add Item</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <img src={assets.parcel_icon} alt="parcel_icon" />
          <p>Item List</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          <img className="orders" src={assets.order_icon} alt="order_icon" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
