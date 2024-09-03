import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Displayitems.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Displayitems = ({ id, name, price, description, image, url }) => {
  const { cartItems, removefromCart, addToCart } = useContext(StoreContext);
  return (
    <div className="display-items">
      <div className="dispaly-image-container">
        <img
          className="dispaly-image"
          src={url + "/image/" + image}
          alt="Category Image"
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="add"
          ></img>
        ) : (
          <div className="item-counter">
            <img
              onClick={() => removefromCart(id)}
              src={assets.remove_icon_red}
              alt="remove quantity"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="display-list-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img
            className="food-item-rating-image"
            src={assets.rating_starts}
            alt="ratings"
          />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default Displayitems;
