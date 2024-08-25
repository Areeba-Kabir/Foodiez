import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Displayitems.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Displayitems = ({ id, name, price, description, image }) => {
  const [count, setCount] = useState(0);
  const { cartItems, removefromCart, addToCart } = useContext(StoreContext);
  return (
    <div className="display-items">
      <div className="dispaly-image-container">
        <img className="dispaly-image" src={image} alt="Category Image" />
        {!count ? (
          <img
            className="add"
            onClick={() => setCount((prev) => prev + 1)}
            src={assets.add_icon_white}
            alt="add"
          ></img>
        ) : (
          <div className="item-counter">
            <img
              onClick={() => setCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt="remove quantity"
            />
            <p>{count}</p>
            <img
              onClick={() => setCount((prev) => prev + 1)}
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
